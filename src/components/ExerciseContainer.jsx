import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import NavBar from "./NavBar";

const ExerciseContainer = ({
  soundsMap,
  nameFormatDisplay,
  exerciseName,
  buttonsArrangement,
  gridCols,
}) => {
  const [correctScore, setCorrectScore] = useState(0);
  const [incorrectScore, setIncorrectScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [items, setItems] = useState(
    Object.keys(soundsMap).map((key) => ({ key: key, active: true }))
  );
  const [previousValue, setPreviousValue] = useState(null);
  const [answered, setAnswered] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isStarted && !isEdited) playRandomTetrad();
  }, [items, isEdited]);

  const getRandomValue = (collection) => {
    let values = Object.values(collection);

    if (values.every(Array.isArray)) {
      const flattenedArray = values.flat();
      return flattenedArray[Math.floor(Math.random() * flattenedArray.length)];
    } else {
      return values[Math.floor(Math.random() * values.length)];
    }
  };

  const playRandomTetrad = () => {
    const remainingItems = items.filter((item) => item.active);
    const remainingSoundsMap = remainingItems.reduce((obj, { key }) => {
      obj[key] = soundsMap[key];
      return obj;
    }, {});
    const randomValue = getRandomValue(remainingSoundsMap);
    setPreviousValue(randomValue);
    randomValue.play();
    setAnswered(false);
    console.log(randomValue);
  };

  const checkResult = (userChoice) => {
    if (!answered) {
      let previousKey = null;

      for (const key in soundsMap) {
        if (Array.isArray(soundsMap[key])) {
          if (soundsMap[key].includes(previousValue)) {
            previousKey = key;
            break;
          }
        } else {
          if (soundsMap[key] === previousValue) {
            previousKey = key;
            break;
          }
        }
      }

      if (
        Array.isArray(soundsMap[userChoice]) &&
        soundsMap[userChoice].includes(previousValue)
      ) {
        setCorrectScore((prev) => prev + 1);
        setIsCorrectAnswer(true);
        setTimeout(() => setIsCorrectAnswer(false), 1000);
      } else if (userChoice === previousKey) {
        setCorrectScore((prev) => prev + 1);
        setIsCorrectAnswer(true);
        setTimeout(() => setIsCorrectAnswer(false), 1000);
      } else {
        setIncorrectScore((prev) => prev + 1);
        toast({
          title: "Correct: ",
          description: `${previousKey}`,
        });
      }
      setAnswered(true);
      setTimeout(playRandomTetrad, 500);
    }
  };

  const replayAudio = () => {
    if (previousValue !== null) {
      previousValue.play();
    }
  };

  const isLastActiveButton = (currentKey) => {
    const activeMinusButtonsCount = items.filter(
      (item) => item.active && item.key !== currentKey && item.key !== "+"
    ).length;
    return activeMinusButtonsCount === 0;
  };

  const handleOption = (keyToHandle) => {
    const activeItemCount = items.filter((item) => item.active).length;
    if (activeItemCount === 1 && keyToHandle.active) {
      toast({
        title: "Warning",
        description: "This is the last active option and cannot be removed.",
      });
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.key === keyToHandle) {
          return { ...item, active: !item.active };
        } else {
          return item;
        }
      })
    );
    setPreviousValue(null);
  };

  const handleStart = () => {
    setIsStarted(true);
    playRandomTetrad();
  };

  const handleEdit = () => {
    setIsEdited(!isEdited);
  };

  const restart = () => {
    setCorrectScore(0);
    setIncorrectScore(0);
    setItems(Object.keys(soundsMap).map((key) => ({ key: key, active: true })));
    setPreviousValue(null);
    setAnswered(false);
  };

  return (
    <>
      <NavBar />
      <div className="sm:mx-auto max-w-xl rounded-2xl bg-teal-900 px-2 sm:px-8 py-6 shadow relative">
        <div className="flex justify-between">
          <h2 className="title flex">
            {exerciseName.split(" ")[0]}
            <span className="text-lg relative top-0">
              {exerciseName.split(" ")[1]}
            </span>
          </h2>
          {isEdited && (
            <span className="h-12 align-center py-3 px-5  text-lg bg-yellow-500 text-white p-2 rounded">
              Edit Mode
            </span>
          )}
          {!isEdited && (
            <div
              className={`w-32 absolute shadow-xl top-7 sm:right-8 right-3 p-1 px-2 text-lg text-white rounded-lg bg-orange-600  ${
                isCorrectAnswer ? "correct-animation" : ""
              }`}
            >
              <p className="font-semibold text-shadow">
                Correct: {correctScore}
              </p>
              <p className="font-semibold">Incorrect: {incorrectScore}</p>
            </div>
          )}
        </div>

        <div className={`grid grid-cols-${gridCols} gap-x-5`}>
          {items.map(({ key, active }, index) => (
            <div
              className={`flex items-center mb-2 justify-between gap-2  ${
                buttonsArrangement && buttonsArrangement(index)
              }`}
              key={key}
            >
              <Button
                variant="secondary"
                className={`h-12 w-full text-md ${
                  !active ? "bg-teal-600 text-teal-900" : ""
                }`}
                disabled={!isStarted || !active || isEdited}
                onClick={() => checkResult(key)}
              >
                <div className="flex flex-col">
                  <div className={`${nameFormatDisplay}`}>
                    <div className="text-xl">{key.split(" ")[0]}</div>
                    <div className="text-sm">{key.split(" ")[1]}</div>
                  </div>
                  <div>{key.split(" ")[2]}</div>
                </div>
              </Button>
              {isEdited && (
                <Button
                  disabled={active && isLastActiveButton(key)}
                  onClick={() => handleOption(key)}
                  className="px-3 text-white text-xl items-center w-12"
                >
                  {active ? "-" : "+"}
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 py-1">
          <div className="flex gap-5  justify-around">
            {!isStarted && !isEdited && (
              <Button className="w-1/2 text-xl" onClick={handleStart}>
                Start
              </Button>
            )}
            {isStarted && !isEdited && (
              <Button className="w-1/2 text-xl" onClick={restart}>
                Restart
              </Button>
            )}
            {!isEdited && isStarted && (
              <Button className="w-1/2 text-xl" onClick={replayAudio}>
                Replay
              </Button>
            )}
            <Button
              className={`text-xl ${isEdited ? "w-full" : "w-1/2"}`}
              onClick={handleEdit}
            >
              {isEdited ? "Save" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseContainer;

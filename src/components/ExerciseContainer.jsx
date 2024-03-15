import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ExerciseContainer = ({ soundsMap, nameFormatDisplay, exerciseName }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [items, setItems] = useState(
    Object.keys(soundsMap).map((key) => ({ key: key, active: true }))
  );
  const [previousValue, setPreviousValue] = useState(null);
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
    console.log(randomValue);
  };

  const checkResult = (userChoice) => {
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
      setCorrect((prev) => prev + 1);
    } else if (userChoice === previousKey) {
      setCorrect((prev) => prev + 1);
    } else {
      setIncorrect((prev) => prev + 1);
      toast({
        title: "Correct: ",
        description: `${previousKey}`,
      });
    }
    setTimeout(playRandomTetrad, 500);
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
    setCorrect(0);
    setIncorrect(0);
    setItems(Object.keys(soundsMap).map((key) => ({ key: key, active: true })));
    setPreviousValue(null);
    playRandomTetrad();
  };

  return (
    <>
      <div className="sm:grid sm:row-start-5 sm:mx-auto max-w-md rounded-2xl bg-teal-800 px-2 sm:px-10 py-6 shadow relative  ">
        <div className="flex justify-between">
          <h2 className="title">{`${exerciseName}`}</h2>
          {isEdited && (
            <p className="h-9 border-2 bg-yellow-500 text-white p-1 rounded ">
              Edit Mode
            </p>
          )}
          {!isEdited && (
            <div className="w-1/3 absolute shadow-xl top-6 right-10 p-1 px-3 text-white rounded-lg bg-orange-500">
              <p className="font-semibold text-shadow">Correct: {correct}</p>
              <p className="font-semibold">Incorrect: {incorrect}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-5">
          {items.map(({ key, active }) => (
            <div
              className="flex items-center mb-2 justify-between gap-2"
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
              <Button
                disabled={!isEdited || (active && isLastActiveButton(key))}
                onClick={() => handleOption(key)}
                className={`px-3 text-white text-xl items-center w-12 ${
                  !isEdited ? "hidden" : ""
                }`}
              >
                {active ? "-" : "+"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-5 bg-white p-3 rounded-lg shadow">
          <div className="flex gap-5 justify-center">
            {!isStarted && <Button onClick={handleStart}>Start</Button>}
            {isStarted && (
              <Button className="w-full" disabled={isEdited} onClick={restart}>
                Restart
              </Button>
            )}
            <Button
              className="w-full"
              disabled={!isStarted || isEdited}
              onClick={replayAudio}
            >
              Replay
            </Button>
            <Button className="w-full" onClick={handleEdit}>
              {isEdited ? "Save" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseContainer;

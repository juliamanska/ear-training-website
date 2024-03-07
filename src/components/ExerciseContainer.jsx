import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ExerciseContainer = ({ soundsMap }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [items, setItems] = useState(
    Object.keys(soundsMap).map((key) => ({ key: key, active: true }))
  );
  const [previousValue, setPreviousValue] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isStarted) playRandomTetrad();
  }, [items]);

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

  const restart = () => {
    setCorrect(0);
    setIncorrect(0);
    setItems(Object.keys(soundsMap).map((key) => ({ key: key, active: true })));
    setPreviousValue(null);
    handleStart();
  };

  return (
    <>
      <div className="mx-auto max-w-md rounded-2xl bg-green-200 p-10 shadow ">
        <div className="grid grid-cols-2 gap-x-10">
          {items.map(({ key, active }) => (
            <div
              className="flex items-center mb-2 justify-between gap-18"
              key={key}
            >
              <Button
                variant="secondary"
                className="w-5 sm:w-full text-md"
                disabled={!isStarted || !active}
                onClick={() => checkResult(key)}
              >
                {key}
              </Button>
              <Button
                disabled={!isStarted || (active && isLastActiveButton(key))}
                onClick={() => handleOption(key)}
                className="px-3 text-white text-xl items-center "
              >
                {active ? "x" : "+"}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-white p-4 rounded-lg shadow">
          <div>
            {!isStarted && <Button onClick={handleStart}>Start</Button>}
            {isStarted && <Button onClick={restart}>Restart</Button>}
            <Button
              className="ml-3"
              disabled={!isStarted}
              onClick={replayAudio}
            >
              Replay
            </Button>
          </div>
          <div>
            <p className="font-semibold">Correct: {correct}</p>
            <p className="font-semibold">Incorrect: {incorrect}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseContainer;

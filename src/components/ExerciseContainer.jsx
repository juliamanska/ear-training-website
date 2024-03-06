import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

// eslint-disable-next-line react/prop-types
const ExerciseContainer = ({ soundsMap }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [items, setItems] = useState(Object.keys(soundsMap));
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
    const remainingItems = Object.keys(soundsMap).filter((item) =>
      items.includes(item)
    );
    const remainingSoundsMap = remainingItems.reduce((obj, key) => {
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

  const handleOption = (keyToHandle) => {
    setItems((prevItems) => prevItems.filter((item) => item !== keyToHandle));
    setPreviousValue(null);
  };

  const handleStart = () => {
    setIsStarted(true);
    playRandomTetrad();
  };

  const restart = () => {
    setCorrect(0);
    setIncorrect(0);
    setItems(Object.keys(soundsMap));
    setPreviousValue(null);
    handleStart();
  };

  return (
    <>
      <div className="bg-green-200 p-5 flex flex-col">
        {items.map((key) => (
          <div key={key}>
            <Button
              variant="secondary"
              disabled={!isStarted}
              onClick={() => checkResult(key)}
            >
              {key}
            </Button>
            <Button disabled={!isStarted} onClick={() => handleOption(key)}>
              -
            </Button>
          </div>
        ))}
        <div>
          {!isStarted && <Button onClick={handleStart}>Start</Button>}
          {isStarted && <Button onClick={restart}>Restart</Button>}
          <Button disabled={!isStarted} onClick={replayAudio}>
            Replay
          </Button>
        </div>
        <div>
          <p>Correct: {correct}</p>
          <p>Incorrect: {incorrect}</p>
        </div>
      </div>
    </>
  );
};

export default ExerciseContainer;

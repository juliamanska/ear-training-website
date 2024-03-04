import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

// eslint-disable-next-line react/prop-types
const ExerciseContainer = ({ soundsMap }) => {
  let [correct, setCorrect] = useState(0);
  let [incorrect, setIncorrect] = useState(0);
  let [isStarted, setIsStarted] = useState(false);
  const [previousValue, setPreviousValue] = useState(null);
  const { toast } = useToast();

  const getRandomValue = (collection) => {
    let values = Object.values(collection);

    if (values.every(Array.isArray)) {
      const flattenedArray = values.flat();
      return flattenedArray[Math.floor(Math.random() * flattenedArray.length)];
    } else {
      return values[Math.floor(Math.random() * values.length)];
    }
  };

  const playRandomTetrad = (collection) => {
    const randomValue = getRandomValue(collection);
    setPreviousValue(randomValue);
    randomValue.play();
    console.log(randomValue);
  };

  const checkResult = (userChoice, collection) => {
    let previousKey = null;

    for (const key in collection) {
      if (Array.isArray(collection[key])) {
        if (collection[key].includes(previousValue)) {
          previousKey = key;
          break;
        }
      } else {
        if (collection[key] === previousValue) {
          previousKey = key;
          break;
        }
      }
    }

    if (
      Array.isArray(collection[userChoice]) &&
      collection[userChoice].includes(previousValue)
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
    setTimeout(() => playRandomTetrad(collection), 500);
  };

  const replayAudio = () => {
    previousValue.play();
  };

  const handleStart = (collection) => {
    setIsStarted(true);
    playRandomTetrad(collection);
  };

  const restart = () => {
    setCorrect(0);
    setIncorrect(0);
  };

  return (
    <>
      <div className="bg-green-200 p-5 flex flex-col">
        {Object.keys(soundsMap).map((key) => (
          <Button
            variant="secondary"
            key={key}
            disabled={!isStarted}
            onClick={() => checkResult(key, soundsMap)}
          >
            {key}
          </Button>
        ))}
        <div>
          {!isStarted && (
            <Button onClick={() => handleStart(soundsMap)}>Start</Button>
          )}
          {isStarted && <Button onClick={() => restart()}>Restart</Button>}
          <Button disabled={!isStarted} onClick={() => replayAudio(soundsMap)}>
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

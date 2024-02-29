import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

// eslint-disable-next-line react/prop-types
const ExerciseContainer = ({ soundsMap }) => {
  let [correct, setCorrect] = useState(0);
  let [incorrect, setIncorrect] = useState(0);
  let [isStarted, setIsStarted] = useState(false);
  const [previousKey, setPreviousKey] = useState(null);
  const { toast } = useToast();

  const getRandomKey = (collection) => {
    let keys = Object.keys(collection);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const playRandomTetrad = (collection) => {
    const randomKey = getRandomKey(collection);
    setPreviousKey(randomKey);
    collection[randomKey].play();
    console.log(randomKey);
  };

  const checkResult = (value, collection) => {
    if (value === previousKey) {
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

  const replayAudio = (collection) => {
    collection[previousKey].play();
  };

  const handleStart = (collection) => {
    setIsStarted(true);
    playRandomTetrad(collection);
  };

  const restart = () => {
    setIsStarted(false);
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

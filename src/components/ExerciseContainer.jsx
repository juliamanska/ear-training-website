import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ExerciseContainer = () => {
  let [correct, setCorrect] = useState(0);
  let [incorrect, setIncorrect] = useState(0);
  const [previousKey, setPreviousKey] = useState(null);
  const { toast } = useToast();

  const audioMap = {
    "dur z 6>": new Audio("src/assets/tetrads/dur_6m.mp3"),
    "dur z 6": new Audio("src/assets/tetrads/dur_6w.mp3"),
    "dur z 7": new Audio("src/assets/tetrads/dur_7m.mp3"),
    "dur z 7<": new Audio("src/assets/tetrads/dur_7w.mp3"),
    "dur z 9>": new Audio("src/assets/tetrads/dur_9m.mp3"),
    "dur z 9": new Audio("src/assets/tetrads/dur_9w.mp3"),
    "moll z 6>": new Audio("src/assets/tetrads/moll_6m.mp3"),
    "moll z 6": new Audio("src/assets/tetrads/moll_6w.mp3"),
    "moll z 7": new Audio("src/assets/tetrads/moll_7m.mp3"),
    "moll z 7<": new Audio("src/assets/tetrads/moll_7w.mp3"),
    "moll z 9>": new Audio("src/assets/tetrads/moll_9m.mp3"),
    "moll z 9": new Audio("src/assets/tetrads/moll_9w.mp3"),
    "zmn z 7": new Audio("src/assets/tetrads/zmn_7.mp3"),
    "zmn z 7>": new Audio("src/assets/tetrads/zmn_7zm.mp3"),
  };

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

  const checkResult = (value) => {
    if (value === previousKey) {
      setCorrect((prev) => prev + 1);
    } else {
      setIncorrect((prev) => prev + 1);
      toast({
        title: "Correct: ",
        description: `${previousKey}`,
      });
    }
    setTimeout(() => playRandomTetrad(audioMap), 500);
  };

  const replayAudio = (collection) => {
    collection[previousKey].play();
  };

  return (
    <>
      <div className="bg-green-200 p-5 flex flex-col">
        {Object.keys(audioMap).map((key) => (
          <Button
            variant="secondary"
            key={key}
            onClick={() => checkResult(key)}
          >
            {key}
          </Button>
        ))}
        <div>
          <Button onClick={() => playRandomTetrad(audioMap)}>Start</Button>
          <Button onClick={() => replayAudio(audioMap)}>Replay</Button>
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

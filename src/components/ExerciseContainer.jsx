import { Button } from "@/components/ui/button";

const ExerciseContainer = () => {
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

  function getRandomKey(collection) {
    let keys = Object.keys(collection);
    return keys[Math.floor(Math.random() * keys.length)];
  }

  const playRandomTetrad = (soundsMap) => {
    let randomKey = getRandomKey(soundsMap);
    soundsMap[randomKey].play();
  };

  return (
    <>
      <div className="bg-green-200 p-5 flex flex-col">
        {Object.keys(audioMap).map((key) => (
          <Button variant="secondary" key={key}>
            {key}
          </Button>
        ))}
        <Button onClick={() => playRandomTetrad(audioMap)}>Start</Button>
      </div>
    </>
  );
};

export default ExerciseContainer;

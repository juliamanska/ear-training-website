import { Button } from "@/components/ui/button";

const ExerciseContainer = () => {
  const audioMap = {
    adur_6m: new Audio("src/assets/tetrads/dur_6m.mp3"),
    adur_6w: new Audio("src/assets/tetrads/dur_6w.mp3"),
    adur_7m: new Audio("src/assets/tetrads/dur_7m.mp3"),
    adur_7w: new Audio("src/assets/tetrads/dur_7w.mp3"),
    adur_9m: new Audio("src/assets/tetrads/dur_9m.mp3"),
    adur_9w: new Audio("src/assets/tetrads/dur_9w.mp3"),
    amoll_6m: new Audio("src/assets/tetrads/moll_6m.mp3"),
    amoll_6w: new Audio("src/assets/tetrads/moll_6w.mp3"),
    amoll_7m: new Audio("src/assets/tetrads/moll_7m.mp3"),
    amoll_7w: new Audio("src/assets/tetrads/moll_7w.mp3"),
    amoll_9m: new Audio("src/assets/tetrads/moll_9m.mp3"),
    amoll_9w: new Audio("src/assets/tetrads/moll_9w.mp3"),
    azmn_7m: new Audio("src/assets/tetrads/zmn_7.mp3"),
    azmn_7zm: new Audio("src/assets/tetrads/zmn_7zm.mp3"),
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
      <Button onClick={() => playRandomTetrad(audioMap)}>Start</Button>
    </>
  );
};

export default ExerciseContainer;

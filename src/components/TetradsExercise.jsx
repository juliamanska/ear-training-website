import ExerciseContainer from "./ExerciseContainer";

const TetradsExercise = () => {
  const tetradsMap = {
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

  return <ExerciseContainer soundsMap={tetradsMap} />;
};

export default TetradsExercise;

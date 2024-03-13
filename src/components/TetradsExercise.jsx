import ExerciseContainer from "./ExerciseContainer";

const TetradsExercise = () => {
  const tetradsMap = {
    "+ 6>": new Audio("src/assets/tetrads/dur_6m.mp3"),
    "+ 6": new Audio("src/assets/tetrads/dur_6w.mp3"),
    "+ 7": new Audio("src/assets/tetrads/dur_7m.mp3"),
    "+ 7<": new Audio("src/assets/tetrads/dur_7w.mp3"),
    "+ 9>": new Audio("src/assets/tetrads/dur_9m.mp3"),
    "+ 9": new Audio("src/assets/tetrads/dur_9w.mp3"),
    "o 6>": new Audio("src/assets/tetrads/moll_6m.mp3"),
    "o 6": new Audio("src/assets/tetrads/moll_6w.mp3"),
    "o 7": new Audio("src/assets/tetrads/moll_7m.mp3"),
    "o 7<": new Audio("src/assets/tetrads/moll_7w.mp3"),
    "o 9>": new Audio("src/assets/tetrads/moll_9m.mp3"),
    "o 9": new Audio("src/assets/tetrads/moll_9w.mp3"),
    "o> 7": new Audio("src/assets/tetrads/zmn_7.mp3"),
    "o> 7>": new Audio("src/assets/tetrads/zmn_7zm.mp3"),
  };

  return (
    <ExerciseContainer soundsMap={tetradsMap} nameFormatDisplay={"flex"} />
  );
};

export default TetradsExercise;

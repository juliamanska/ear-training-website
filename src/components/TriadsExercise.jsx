import ExerciseContainer from "./ExerciseContainer";

const TriadsExercise = () => {
  const triadsMap = {
    "+ 1": [
      new Audio("src/assets/triads/dur_1_1.mp3"),
      new Audio("src/assets/triads/dur_1_2.mp3"),
    ],
    "+ 3": [
      new Audio("src/assets/triads/dur_3_1.mp3"),
      new Audio("src/assets/triads/dur_3_2.mp3"),
    ],
    "+ 5": [
      new Audio("src/assets/triads/dur_5_1.mp3"),
      new Audio("src/assets/triads/dur_5_2.mp3"),
    ],
    "o 1": [
      new Audio("src/assets/triads/moll_1_1.mp3"),
      new Audio("src/assets/triads/moll_1_2.mp3"),
    ],
    "o 3": [
      new Audio("src/assets/triads/moll_3_1.mp3"),
      new Audio("src/assets/triads/moll_3_2.mp3"),
    ],
    "o 5": [
      new Audio("src/assets/triads/moll_5_1.mp3"),
      new Audio("src/assets/triads/moll_5_2.mp3"),
    ],
    "o> 1": [
      new Audio("src/assets/triads/zmn_1_1.mp3"),
      new Audio("src/assets/triads/zmn_1_2.mp3"),
    ],
    "o> 3": [
      new Audio("src/assets/triads/zmn_3_1.mp3"),
      new Audio("src/assets/triads/zmn_3_2.mp3"),
    ],
    "o> 5": [
      new Audio("src/assets/triads/zmn_5_1.mp3"),
      new Audio("src/assets/triads/zmn_5_2.mp3"),
    ],
    "+<": [
      new Audio("src/assets/triads/zw_1.mp3"),
      new Audio("src/assets/triads/zw_2.mp3"),
      new Audio("src/assets/triads/zw_3.mp3"),
    ],
  };
  return (
    <>
      <ExerciseContainer soundsMap={triadsMap} exerciseName={"Triads"} />;
    </>
  );
};

export default TriadsExercise;

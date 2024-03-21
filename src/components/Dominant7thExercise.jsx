import ExerciseContainer from "./ExerciseContainer";

const Dominant7thExercise = () => {
  const dominant7thMap = {
    "D 7 1": [
      new Audio("src/assets/dominant7th/D7_1_1.mp3"),
      new Audio("src/assets/dominant7th/D7_1_2.mp3"),
      new Audio("src/assets/dominant7th/D7_1_3.mp3"),
      new Audio("src/assets/dominant7th/D7_1_4.mp3"),
    ],
    "D 7 3": [
      new Audio("src/assets/dominant7th/D7_3_1.mp3"),
      new Audio("src/assets/dominant7th/D7_3_2.mp3"),
      new Audio("src/assets/dominant7th/D7_3_3.mp3"),
      new Audio("src/assets/dominant7th/D7_3_4.mp3"),
    ],
    "D 7 5": [
      new Audio("src/assets/dominant7th/D7_5_1.mp3"),
      new Audio("src/assets/dominant7th/D7_5_2.mp3"),
      new Audio("src/assets/dominant7th/D7_5_3.mp3"),
      new Audio("src/assets/dominant7th/D7_5_4.mp3"),
    ],
    "D 7 7": [
      new Audio("src/assets/dominant7th/D7_7_1.mp3"),
      new Audio("src/assets/dominant7th/D7_7_2.mp3"),
      new Audio("src/assets/dominant7th/D7_7_3.mp3"),
      new Audio("src/assets/dominant7th/D7_7_4.mp3"),
    ],
  };

  return (
    <>
      <ExerciseContainer
        soundsMap={dominant7thMap}
        nameFormatDisplay={"flex"}
        exerciseName={"D 7"}
        gridCols={1}
      />
    </>
  );
};

export default Dominant7thExercise;

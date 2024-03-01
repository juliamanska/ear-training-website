import ExerciseContainer from "./ExerciseContainer";

const Dominant7thExercise = () => {
  //   const dominant7thMap = {
  //     D7_1_1: new Audio("src/assets/dominant7th/D7_1_1.mp3"),
  //     D7_1_2: new Audio("src/assets/dominant7th/D7_1_2.mp3"),
  //     D7_1_3: new Audio("src/assets/dominant7th/D7_1_3.mp3"),
  //     D7_1_4: new Audio("src/assets/dominant7th/D7_1_4.mp3"),
  //     D7_3_1: new Audio("src/assets/dominant7th/D7_3_1.mp3"),
  //     D7_3_2: new Audio("src/assets/dominant7th/D7_3_2.mp3"),
  //     D7_3_3: new Audio("src/assets/dominant7th/D7_3_3.mp3"),
  //     D7_3_4: new Audio("src/assets/dominant7th/D7_3_4.mp3"),
  //     D7_5_1: new Audio("src/assets/dominant7th/D7_5_1.mp3"),
  //     D7_5_2: new Audio("src/assets/dominant7th/D7_5_2.mp3"),
  //     D7_5_3: new Audio("src/assets/dominant7th/D7_5_3.mp3"),
  //     D7_5_4: new Audio("src/assets/dominant7th/D7_5_4.mp3"),
  //     D7_7_1: new Audio("src/assets/dominant7th/D7_7_1.mp3"),
  //     D7_7_2: new Audio("src/assets/dominant7th/D7_7_2.mp3"),
  //     D7_7_3: new Audio("src/assets/dominant7th/D7_7_3.mp3"),
  //     D7_7_4: new Audio("src/assets/dominant7th/D7_7_4.mp3"),
  //   };

  const dominant7thMap = {
    "D7 na 1": [
      new Audio("src/assets/dominant7th/D7_1_1.mp3"),
      new Audio("src/assets/dominant7th/D7_1_2.mp3"),
      new Audio("src/assets/dominant7th/D7_1_3.mp3"),
      new Audio("src/assets/dominant7th/D7_1_4.mp3"),
    ],
    "D7 na 3": [
      new Audio("src/assets/dominant7th/D7_3_1.mp3"),
      new Audio("src/assets/dominant7th/D7_3_2.mp3"),
      new Audio("src/assets/dominant7th/D7_3_3.mp3"),
      new Audio("src/assets/dominant7th/D7_3_4.mp3"),
    ],
    "D7 na 5": [
      new Audio("src/assets/dominant7th/D7_5_1.mp3"),
      new Audio("src/assets/dominant7th/D7_5_2.mp3"),
      new Audio("src/assets/dominant7th/D7_5_3.mp3"),
      new Audio("src/assets/dominant7th/D7_5_4.mp3"),
    ],
    "D7 na 7": [
      new Audio("src/assets/dominant7th/D7_7_1.mp3"),
      new Audio("src/assets/dominant7th/D7_7_2.mp3"),
      new Audio("src/assets/dominant7th/D7_7_3.mp3"),
      new Audio("src/assets/dominant7th/D7_7_4.mp3"),
    ],
  };

  return (
    <>
      <div>Dominant7thExercise</div>;
      <ExerciseContainer soundsMap={dominant7thMap} />;
    </>
  );
};

export default Dominant7thExercise;

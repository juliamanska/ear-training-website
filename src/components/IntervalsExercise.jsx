import ExerciseContainer from "./ExerciseContainer";

const IntervalsExercise = () => {
  const intervalsMap = {
    1: [
      new Audio("src/assets/intervals/1_1.mp3"),
      new Audio("src/assets/intervals/1_2.mp3"),
    ],
    "2>": [
      new Audio("src/assets/intervals/2m_1.mp3"),
      new Audio("src/assets/intervals/2m_2.mp3"),
    ],
    2: [
      new Audio("src/assets/intervals/2_1.mp3"),
      new Audio("src/assets/intervals/2_2.mp3"),
    ],
    "3>": [
      new Audio("src/assets/intervals/3m_1.mp3"),
      new Audio("src/assets/intervals/3m_2.mp3"),
    ],
    3: [
      new Audio("src/assets/intervals/3_1.mp3"),
      new Audio("src/assets/intervals/3_2.mp3"),
    ],
    4: [
      new Audio("src/assets/intervals/4_1.mp3"),
      new Audio("src/assets/intervals/4_2.mp3"),
    ],
    "5>": [
      new Audio("src/assets/intervals/5zmn_1.mp3"),
      new Audio("src/assets/intervals/5zmn_2.mp3"),
    ],
    5: [
      new Audio("src/assets/intervals/5_1.mp3"),
      new Audio("src/assets/intervals/5_2.mp3"),
    ],
    "6>": [
      new Audio("src/assets/intervals/6m_1.mp3"),
      new Audio("src/assets/intervals/6m_2.mp3"),
    ],
    6: [
      new Audio("src/assets/intervals/6_1.mp3"),
      new Audio("src/assets/intervals/6_2.mp3"),
    ],
    7: [
      new Audio("src/assets/intervals/7_1.mp3"),
      new Audio("src/assets/intervals/7_2.mp3"),
    ],
    "7<": [
      new Audio("src/assets/intervals/7w_1.mp3"),
      new Audio("src/assets/intervals/7w_2.mp3"),
    ],
    8: [
      new Audio("src/assets/intervals/8_1.mp3"),
      new Audio("src/assets/intervals/8_2.mp3"),
    ],
  };

  return (
    <>
      <ExerciseContainer soundsMap={intervalsMap} exerciseName={"Intervals"} />
    </>
  );
};

export default IntervalsExercise;

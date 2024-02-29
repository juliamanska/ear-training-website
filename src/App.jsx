import NavBar from "./components/NavBar";
import ExerciseContainer from "./components/ExerciseContainer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <NavBar />
      <ExerciseContainer />
      <Toaster />
    </>
  );
}

export default App;

import { Toaster } from "@/components/ui/toaster";
import Staff from "./components/Staff";
import { Route, Routes } from "react-router-dom";
import TetradsExercise from "./components/TetradsExercise";
import Dominant7thExercise from "./components/Dominant7thExercise";
import IntervalsExercise from "./components/IntervalsExercise";
import TriadsExercise from "./components/TriadsExercise";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Toaster />
      {/* <Staff /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intervals" element={<IntervalsExercise />} />
        <Route path="/triads" element={<TriadsExercise />} />
        <Route path="/tetrads" element={<TetradsExercise />} />
        <Route path="/dominant7th" element={<Dominant7thExercise />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

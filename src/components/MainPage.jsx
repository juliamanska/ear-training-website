import { NavLink } from "react-router-dom";
import notes from "../assets/icons/notes.svg";

const MainPage = () => {
  return (
    <>
      <div className="bg-teal-600 text-white h-screen flex flex-col justify-center items-center gap-5 relative overflow-hidden">
        <div className="z-10 bg-white py-12  p-5 rounded-2xl">
          <div className="px-3 text-center text-teal-900 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 flex gap-5">
              <img src={notes} className="scale-125 mb-4" alt="Ear Logo" />
              Ear Training
            </h1>

            <p className="text-lg text-gray-600">Choose your challenge!</p>
          </div>

          <div className="grid grid-cols-2 p-10 rounded-xl gap-5 mt-8 shadow bg-teal-700">
            <NavLink
              to="/tetrads"
              className="nav-button bg-orange-500 hover:bg-orange-600"
            >
              Tetrads
            </NavLink>
            <NavLink
              to="/triads"
              className="nav-button bg-teal-800 hover:bg-teal-900"
            >
              Triads
            </NavLink>
            <NavLink
              to="/intervals"
              className="nav-button bg-yellow-500 hover:bg-yellow-600"
            >
              Intervals
            </NavLink>
            <NavLink
              to="/dominant7th"
              className="nav-button bg-red-600 hover:bg-red-700"
            >
              Dominant 7th
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

import { NavLink } from "react-router-dom";
import notes from "../assets/icons/notes.svg";

const MainPage = () => {
  return (
    <>
      <div className="bg-teal-700 text-white h-screen flex flex-col justify-center items-center gap-5 relative overflow-hidden">
        <div className="z-10 bg-teal-900 py-20 shadow-xl p-5 rounded-2xl">
          <div className="px-3 text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-7 flex gap-5">
              <img
                src={notes}
                className="scale-125 mb-4 min-h-12 min-w-12"
                alt="Ear Logo"
              />
              Ear Training
            </h1>

            <p className="text-xl text-gray-300 font-semibold">
              Choose your challenge!
            </p>
          </div>
          <hr className="bg-white mt-2 mx-14" />
          <div className="grid grid-cols-2 p-10 rounded-xl gap-5 mt-8  bg-teal-900">
            <NavLink
              to="/tetrads"
              className="nav-button bg-orange-600 hover:bg-orange-700"
            >
              Tetrads
            </NavLink>
            <NavLink
              to="/triads"
              className="nav-button bg-yellow-500 hover:bg-yellow-600 "
            >
              Triads
            </NavLink>
            <NavLink
              to="/intervals"
              className="nav-button bg-teal-500 hover:bg-teal-600"
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

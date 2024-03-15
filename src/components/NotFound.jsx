import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-teal-800 text-white h-screen flex flex-col justify-center items-center">
      <div className="p-20 px-10 text-center text-lg text-gray-100 bg-teal-900 border border-red-500 rounded-3xl">
        <p className="text-4xl text-white mb-10 ">Oops! Page not found!</p>
        <NavLink
          to="/"
          className="p-2 px-5 bg-red-500 hover:bg-red-600 shadow-md rounded-3xl "
        >
          Go to home page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;

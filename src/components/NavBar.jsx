import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TetradsExercise from "./TetradsExercise";
import Dominant7thExercise from "./Dominant7thExercise";
import IntervalsExercise from "./IntervalsExercise";
import TriadsExercise from "./TriadsExercise";
import MainPage from "./MainPage";
import notes from "../assets/icons/notes.svg";

const NavBar = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <>
      {!isMainPage && (
        <nav className="p-5 sm:px-20 my-5 justify-between flex bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 gap-10">
          <NavLink to="/">
            <div className="flex gap-3 px-3">
              <img src={notes} />
              <h1 className="heading-logo">
                Ear <br /> Training
              </h1>
            </div>
          </NavLink>
          <NavigationMenu className="gap-5 hidden sm:flex">
            <NavigationMenuList className="text-white">
              <NavigationMenuItem>
                <NavLink to="/tetrads">
                  <NavigationMenuLink className="nav-button bg-orange-500 hover:bg-orange-600">
                    Tetrads
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/intervals">
                  <NavigationMenuLink className="nav-button bg-yellow-500 hover:bg-yellow-600">
                    Intervals
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/triads">
                  <NavigationMenuLink className="nav-button bg-teal-800 hover:bg-teal-900">
                    Triads
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/dominant7th">
                  <NavigationMenuLink className="nav-button bg-red-600 hover:bg-red-700">
                    D7
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="open-menu block sm:hidden bg-red-50 p-3">
              Open Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <NavLink to="/intervals">
                <DropdownMenuItem className="nav-button bg-yellow-500">
                  Intervals
                </DropdownMenuItem>
              </NavLink>
              <NavLink to="/dominant7th">
                <DropdownMenuItem className="nav-button bg-red-600">
                  D7
                </DropdownMenuItem>
              </NavLink>
              <NavLink to="/triads">
                <DropdownMenuItem className="nav-button bg-teal-800">
                  Triads
                </DropdownMenuItem>
              </NavLink>
              <NavLink to="/tetrads">
                <DropdownMenuItem className="nav-button bg-orange-500">
                  Tetrads
                </DropdownMenuItem>
              </NavLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intervals" element={<IntervalsExercise />} />
        <Route path="/triads" element={<TriadsExercise />} />
        <Route path="/tetrads" element={<TetradsExercise />} />
        <Route path="/dominant7th" element={<Dominant7thExercise />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default NavBar;

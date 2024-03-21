import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import notes from "../assets/icons/notes.svg";

const NavBar = () => {
  return (
    <>
      <nav className="p-5 px-2 sm:px-20 mb-5 justify-between flex bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 gap-10">
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
              <NavLink
                to="/tetrads"
                className="nav-button bg-orange-600 hover:bg-orange-700"
              >
                Tetrads
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/intervals"
                className="nav-button bg-teal-500 hover:bg-teal-600"
              >
                Intervals
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/triads"
                className="nav-button bg-yellow-500 hover:bg-yellow-600"
              >
                Triads
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/dominant7th"
                className="nav-button bg-red-600 hover:bg-red-700"
              >
                D<span className="text-xs relative -top-1">7</span>
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="open-menu block sm:hidden bg-red-50 mx-2">
            Open Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <NavLink to="/tetrads">
              <DropdownMenuItem className="nav-button bg-orange-600">
                Tetrads
              </DropdownMenuItem>
            </NavLink>
            <NavLink to="/intervals">
              <DropdownMenuItem className="nav-button bg-teal-500">
                Intervals
              </DropdownMenuItem>
            </NavLink>
            <NavLink to="/triads">
              <DropdownMenuItem className="nav-button bg-yellow-500">
                Triads
              </DropdownMenuItem>
            </NavLink>
            <NavLink to="/dominant7th">
              <DropdownMenuItem className="nav-button bg-red-600">
                D<span className="text-xs relative -top-1">7</span>
              </DropdownMenuItem>
            </NavLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
};

export default NavBar;

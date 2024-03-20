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
      <nav className="p-5 px-2 sm:px-20 my-5 justify-between flex bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 gap-10">
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
                className="nav-button bg-orange-500 hover:bg-orange-600"
              >
                Tetrads
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/intervals"
                className="nav-button bg-yellow-500 hover:bg-yellow-600"
              >
                Intervals
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="/triads"
                className="nav-button bg-teal-800 hover:bg-teal-900"
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
                D<span className="text-xs relative -top-1">7</span>
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
    </>
  );
};

export default NavBar;

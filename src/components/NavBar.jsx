import { Route, Routes, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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

const NavBar = () => {
  return (
    <>
      <nav className="p-5 sm:px-20 my-5 flex bg-green-100 gap-10">
        <NavLink to="/">
          <div className="px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="50"
              height="50"
            >
              {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
                          License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path d="M398.3 3.4c-15.8-7.9-35-1.5-42.9 14.3c-7.9 15.8-1.5 34.9 14.2 42.9l.4 .2c.4 .2 1.1 .6 2.1 1.2c2 1.2 5 3 8.7 5.6c7.5 5.2 17.6 13.2 27.7 24.2C428.5 113.4 448 146 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32c0-66-28.5-113.4-56.5-143.7C441.6 33.2 427.7 22.2 417.3 15c-5.3-3.7-9.7-6.4-13-8.3c-1.6-1-3-1.7-4-2.2c-.5-.3-.9-.5-1.2-.7l-.4-.2-.2-.1-.1 0 0 0c0 0 0 0-14.3 28.6L398.3 3.4zM128.7 227.5c6.2-56 53.7-99.5 111.3-99.5c61.9 0 112 50.1 112 112c0 29.3-11.2 55.9-29.6 75.9c-17 18.4-34.4 45.1-34.4 78V400c0 26.5-21.5 48-48 48c-17.7 0-32 14.3-32 32s14.3 32 32 32c61.9 0 112-50.1 112-112v-6.1c0-9.8 5.4-21.7 17.4-34.7C398.3 327.9 416 286 416 240c0-97.2-78.8-176-176-176C149.4 64 74.8 132.5 65.1 220.5c-1.9 17.6 10.7 33.4 28.3 35.3s33.4-10.7 35.3-28.3zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM192 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0zM208 240c0-17.7 14.3-32 32-32s32 14.3 32 32c0 13.3 10.7 24 24 24s24-10.7 24-24c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
            </svg>
            <h1 className="heading-logo">Ear Training</h1>
          </div>
        </NavLink>
        <NavigationMenu className="gap-5 hidden sm:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink to="/intervals">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Intervals
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="item">
              <NavLink to="/dominant7th">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  D7
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/triads">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Triads
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/tetrads">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Tetrads
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="block p-5 px-20 sm:hidden open-menu">
            Open Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <NavLink to="/intervals">
              <DropdownMenuItem>Intervals</DropdownMenuItem>
            </NavLink>
            <NavLink to="/dominant7th">
              <DropdownMenuItem>D7</DropdownMenuItem>
            </NavLink>
            <NavLink to="/triads">
              <DropdownMenuItem>Triads</DropdownMenuItem>
            </NavLink>
            <NavLink to="/tetrads">
              <DropdownMenuItem>Tetrads</DropdownMenuItem>
            </NavLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Main page</h1>} />
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

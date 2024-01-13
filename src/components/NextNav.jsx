import {
  Navbar,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import useDataContext from "../hooks/useDataContext";
import { useState } from "react";
import { navLinks } from "../links/dummyLinks";
import Logo from "./Logo";

// import Logo from "./Logo";

const NextNav = () => {
  const { user, handleSignOut } = useDataContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = "font-bold text-light-blue text-lg md:text-2xl";
  const normalLinkStyle = "text-lg md:text-2xl";

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="center">
        <Logo />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 md:gap-6 lg:gap-4 xl:gap-10 "
        justify="center"
      >
        {navLinks.map((link, index) => (
          <NavbarItem key={`${link.path}-${index}:lg routes`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
              to={link.path}
            >
              {link.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify="center">
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              size="sm"
              src={user && user?.photoURL}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key={user?.displayName}>
              {user?.displayName}
            </DropdownItem>
            <DropdownItem key={user?.email}>{user?.email}</DropdownItem>
            <DropdownItem
              onClick={handleSignOut}
              key="sign out"
              className="text-danger"
              color="danger"
            >
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={`${link.path}-${index}:max-lg routes`}>
            <NavLink
              className="w-full"
              color={"foreground"}
              to={link.path}
              size="lg"
            >
              {link.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NextNav;

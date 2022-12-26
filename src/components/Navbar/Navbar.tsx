import React from "react";
import { INavbarProps } from "../../interfaces/components/Navbar";
import NavbarLogo from "../../assets/logo/logo.svg";
import { StyledNavbar } from "./styled";
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = ({
  menuItems,
  userAvatar,
}: INavbarProps) => {


  return (
    <StyledNavbar>
      <img src={NavbarLogo} alt="" className="navbar-logo" />
      <div className="navbar-menu">
        <ul className="navbar-list list">
          {menuItems.map((item) => (
            <li key={Math.random()} className="list-item">
              <Link to="/" className="item-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <img src={userAvatar} alt="" />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBarStyle from "./navbar.module.scss";
import panda from "./icons8-panda-96.png";
import home from "./icons8-home-page-100.png";
import AuthNav from "../AuthNav/AuthNav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const {
    // user,
    isAuthenticated,
    // loginWithRedirect,
    // logout,
  } = useAuth0();
  return (
    <div className={NavBarStyle.NavBarContainer}>
      <img className={NavBarStyle.NavBarLogo} src={panda} alt="logo" />
      <ul id="menu">
        <NavLink to="/">
          <li>
            <img className={NavBarStyle.NavBaHomeIcon} src={home} alt="home" />
            <span className={NavBarStyle.NavBaHomeText}>Home</span>
          </li>
        </NavLink>
        {isAuthenticated && (
          <li>
            Weather
            <ul>
              {isAuthenticated && (
                <NavLink to="/wxdaily">
                  <li>Daily forecast</li>
                </NavLink>
              )}
              {isAuthenticated && (
                <NavLink to="/wxfivedays">
                  <li>5 daily forecast</li>
                </NavLink>
              )}
            </ul>
          </li>
        )}

        {isAuthenticated && (
          <NavLink to="/contacts">
            <li>ContactUs</li>
          </NavLink>
        )}
        {!isAuthenticated && (
          <NavLink to="/">
            <li className={NavBarStyle.NavBarContainerListLogin}>
              <button>
                <AuthNav />
              </button>
            </li>
          </NavLink>
        )}
        {isAuthenticated && (
          <NavLink to="/">
            <li className={NavBarStyle.NavBarContainerListLogin}>
              <button>
                <AuthNav />
              </button>
            </li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import LoginNavbar from "@/components/loginNavbar";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Callback from "../components/callback";

const Login = () => {
  const [toggler, setToggler] = useState(false);

  const handleToggle = () => {
    setToggler((currentState) => !currentState);
    // console.log("clicked")
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const handleShowNavbar = () => {
    setShowNavbar((currentState) => !currentState);
  };

  const [UIColor, setUIColor] = useState(null);
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="d-flex flex-direction-row justify-content-start">
      {/* {smallNavbar ? <SLoginNavbar /> : <LoginNavbar />} */}
      {showNavbar && <LoginNavbar />}
      <div className="w-100 dashboard">
        <div className="d-flex justify-content-between w-100 headerDashboard text-white align-items-center ">
          {showNavbar ? (
            <RxCross1
              className="headerDashboardIcon"
              onClick={handleShowNavbar}
            />
          ) : (
            <RxHamburgerMenu
              className="headerDashboardIcon"
              onClick={handleShowNavbar}
            />
          )}
          <b className="loginNavbarLogoText">TAGPROS</b>
          <div className="dropdown cursorPointer ">
            <a
              className="d-flex align-items-center justify-content-center text-decoration-none dropdown-toggle bg-transparent text-white"
              onClick={handleToggle}
            >
              <img
                src="/profile.jpg"
                className="rounded-circle  loginProfilePic"
              ></img>
              {/* <strong>Marc</strong> */}
            </a>
            <ul
              className="dropdown-menu text-small shadow show navbarProfileDD"
              style={{
                display: toggler === false && "none",
              }}
              data-popper-placement="top-start"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h1 className="m-2 p-3">Content</h1>
          <div
            style={{
              background: `${UIColor}`,
              width: "80%",
              border: "1px solid black",
              height: "100px",
            }}
          ></div>
          <Callback getColor={getColor} />
        </div>
      </div>
    </div>
  );
};

export default Login;

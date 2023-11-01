import React from "react";
import css from "./Navbar.module.css";
import BlackButton from "../BlackButton/BlackButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <div
          className={css.logoSection}
          onClick={() => {
            navigate("home");
          }}
        >
          <h1>Pyrowatch</h1>
        </div>
        <div className={css.linksSections}>
          <h4
            onClick={() => {
              navigate("aboutus");
            }}
          >
            About Us
          </h4>
          <h4
            onClick={() => {
              navigate("services");
            }}
          >
            Services
          </h4>
          <div className={css.resourcesCenter}>
            <h4
              onClick={() => {
                navigate("resources");
              }}
            >
              Resources
            </h4>
            *
          </div>
        </div>
        <div className={css.signUpSection}>
          <BlackButton title={"Sign Up"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

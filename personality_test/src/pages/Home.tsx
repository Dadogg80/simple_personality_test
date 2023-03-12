import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../pages/Home.css";

const Home: React.FC = () => {
  return (
    <>
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Click button to start Personality test
        </p>
        <Link to="/questions">
          <button>Start</button>
        </Link>
      </header>
      </div></>

  );
};

export default Home;
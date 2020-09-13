import React from "react";
import { NavLink } from 'react-router-dom'

import "../stylesheets/Landing.css";
import first from "../Images/undraw_placeholders_rklh.svg";
import forth from "../Images/undraw_open_source_1qxw.svg";
import third from "../Images/undraw_functions_egi3.svg";
// import plane from "../Images/plane.png";
import Flipcomp from "../UI comps/Flipcomp";
import CountUp from "react-countup";
import { SiAirplayvideo } from "react-icons/si";
import { ImDownload } from "react-icons/im";
import { FiGrid } from "react-icons/fi";
const Home = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
            <h1 className="head-heading">
              Fit learning into your life with{" "}
              <text className="strong">OnLearn</text>
            </h1>
            <p className="head-para">
              Onlearn brings you the knowledge from top nonfiction, so you can
              learn anytime, anywhere.
            </p>
            <div className="mt-3 gsdiv">
              <a href="" className="getstarted">
                Get Started
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-10  mx-auto maindiv"></div>
          </div>
        </div>
      </section>
      {/*  */}

      {/*  counter*/}
      <div className="rect">
        <div className="rect-col">
          <SiAirplayvideo size={100} />
          <br />
          <strong>
            <CountUp end={672} duration={7} />
          </strong>
          <br /> Videos
        </div>
        <div className="rect-col">
          <FiGrid size={100} />
          <br />
          <strong>
            <CountUp end={35} duration={6} />
          </strong>{" "}
          <br />
          Categories
        </div>
        <div className="rect-col">
          <ImDownload size={100} />
          <br />
          <strong>
            <CountUp end={789} duration={7} />
          </strong>
          <br />
          Downloads
        </div>
      </div>
      {/*  */}
      <Flipcomp />
      {/*  */}
      <div className="centerdiv">
        <h3 className="cardhead">Choose the format that fits your life</h3>
        <div className="cardblock">
          <div className="card">
            <img className="card-img-top" src={first} alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <strong>Dive into audiobooks</strong>
              </h5>
              <p className="card-text">
                Go deeper into your favorite topics with full-length audiobooks.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={third} alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <strong>Get key insights</strong>
              </h5>
              <p className="card-text">
                Watch & listen to the key ideas from most watched tech
                titles in 15 minutes.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={forth} alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <strong>Enjoy original content</strong>
              </h5>
              <p className="card-text">
                Discover new perspectives with exclusive Courses and podcasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/*  */}
      <div className="curious">
        <h2 className="cardhead">
          <text className="strong">Curious ?</text> Try it for free
        </h2>
        <h5 className="curioushead">
          Start enjoying the entire library of ONL's and shows.
          <br />
          <strong>SignUp & get full access</strong>
        </h5>

        <div className="infobar">
          <div className="infoleft">
            <p>
              You can try OnLearn for <strong>free.</strong> Don’t worry, if
              you don't have OnLearn account make one.
            </p>
          </div>
          <div className="inforight">
            <div className="btnlist">
          <li className="nav-item">
        <NavLink exact className="nav-link nav-btn lg-btn" to="/Login" id='login'>Login</NavLink>
      </li>
      <li className="nav-item  ">
        <NavLink exact className="nav-link nav-btn lg-btn" to="/Signup"  id='signup'>Signup</NavLink>
      </li>
      </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="joinbar">
        <h3 className="infohead">
          Join <text className="strong">15 million people</text> in learning{" "}
          <br />
          anywhere, anytime—every day
        </h3>
        <p className="infopara">
          Become a member of our global community and be a part of the <br />
          learning revolution.
        </p>
      </div>
    </>
  );
};

export default Home;

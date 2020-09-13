import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import web from "../Images/undraw_video_influencer_9oyy.svg";
import web2 from "../Images/undraw_in_real_life_v8fk.svg";
import web3 from "../Images/undraw_discount_d4bd (1).svg";
const FlippyStyle = {
  //   width: '30%',
  //   height:'auto',
  maxWidth: "200px",
  minHeight:'250px',
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "1.5em",
  justifyContent: "center",
  margin: "1rem",
};

const DefaultCardContents1 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={web} style={{ width: "100%", height: "100%" }} />

      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
          height:''
        }}
      >
        {children}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#168344",
      }}
    >
      <strong
        style={{
          fontWeight: "bolder",
          color: "black",
        }}
      >
        High Resolution Video
      </strong>
      <br />
      Get the Best experience and go deeper into your favourite topics.
      <span
        style={{
          fontSize: "12px",
          position: "absolute",

          width: "100%",
        }}
      >
        {children}
        <br />
      </span>
    </BackSide>
  </React.Fragment>
);

const FlippyOnHover1 = ({ flipDirection = "horizontal" }) => (
  <Flippy
    flipOnHover={true}
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents1></DefaultCardContents1>
  </Flippy>
);

const DefaultCardContents2 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={web2} style={{ width: "100%", height: "100%" }} />

      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#168344",
      }}
    >
      <strong
        style={{
          fontWeight: "bolder",
          color: "black",
        }}
      >
        {" "}
        Offline content
      </strong>
      <br />
      Get your Videos offline with benefit of unlimited downloads & go through it
      anytime.
      <span
        style={{
          fontSize: "12px",
          position: "absolute",

          width: "100%",
        }}
      >
        {children}
      </span>
    </BackSide>
  </React.Fragment>
);

const FlippyOnHover2 = ({ flipDirection = "horizontal" }) => (
  <Flippy
    flipOnHover={true}
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents2></DefaultCardContents2>
  </Flippy>
);

const DefaultCardContents3 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={web3} style={{ width: "100%", height: "100%" }} />

      <span
        style={{
          fontSize: "12px",
          position: "absolute",

          width: "100%",
        }}
      >
        {children}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#168344",
      }}
    >
      <strong
        style={{
          fontWeight: "bolder",
          color: "black",
        }}
      >
        Get the best prices
      </strong>
      <br></br>
      Get huge discounts on Courses compared from other online Websites.
      <span
        style={{
          fontSize: "12px",
          position: "absolute",

          width: "100%",
        }}
      >
        {children}
      </span>
    </BackSide>
  </React.Fragment>
);

const FlippyOnHover3 = ({ flipDirection = "horizontal" }) => (
  <Flippy
    flipOnHover={true}
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents3></DefaultCardContents3>
  </Flippy>
);

class CompIII extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped,
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <h3
          style={{
            fontWeight: "bolder",
          }}
        >
          Get best service{" "}
        </h3>
        <br></br>
        <br></br>
        <div
          style={{
            display: "flex",
            flex: "1 0 200px",
            justifyContent: "space-around",
            "flex-wrap": "wrap",
          }}
        >
          <FlippyOnHover2 />
          <FlippyOnHover1 flipDirection="horizontal" />
          <FlippyOnHover3 />
        </div>
      </div>
    );
  }
}

export default CompIII;

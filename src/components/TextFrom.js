import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextFrom(props) {
  const OneClick = () => {
    // console.log('OneClick Activate' + Text)
    let NewText = Text.toUpperCase();
    setText(NewText);
    props.ShowAlert(' Your Text converted to Upper Case successfully','success')
  };

  const TowClick = () => {
    // console.log('OneClick Activate' + Text)
    let NewText = Text.toLowerCase();
    setText(NewText);
    props.ShowAlert(' Your Text converted to Lower Case successfully','success')
  };

  const clear = () => {
    // console.log('OneClick Activate' + Text)

    setText("");
    props.ShowAlert(' YourText has been clear successfully','success')
  };

  const OneChange = (event) => {
    // console.log('OneChange Activate')
    setText(event.target.value);
  };

  const Copy = () => {
    let copy = document.getElementById("myText");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    props.ShowAlert(' YourText has been copy successfully','success')
  };

  const Cut = () => {
    let copy = document.getElementById("myText");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    setText("");
    props.ShowAlert(' YourText has been cut successfully','success')
  };

  const Space = () => {
    let space = Text.split(/[ ]+/);
    setText(space.join(" "));
    props.ShowAlert(' All Extra Space are Clear','success')
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.Heding} </h1>

        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            | Characters {Text.length} |-| Words {Text.split(" ").length} |
          </label>
          <textarea
            className="form-control"
            value={Text}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={OneChange}
            id="myText"
            rows={props.TextArea}
          ></textarea>
        </div>
        <button
          type="button"
          onClick={OneClick}
          className="btn btn-primary my-2 mx-2"
        >
          {props.Button1Title}
        </button>
        <button
          type="button"
          onClick={TowClick}
          className="btn btn-primary my-2 mx-2"
        >
          {props.Button2Title}
        </button>
        <button
          type="button"
          onClick={Space}
          className="btn btn-primary my-2 mx-2"
        >
          {props.Button5Title}
        </button>
        <button
          type="button"
          onClick={Cut}
          className="btn btn-primary my-2 mx-2"
        >
          {props.Button6Title}
        </button>
        <button
          type="button"
          onClick={Copy}
          className="btn btn-primary my-2 mx-2"
        >
          {props.Button4Title}
        </button>
        <button
          type="button"
          onClick={clear}
          className="btn btn-primary my-2 mx-2"
        >
          {props.Button3Title}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1> Your Text Summary </h1>
        <p>{0.008 * Text.split(" ").length} Minutes To Red</p>
        <h3>Preview</h3>
        <p>{Text.length > 0 ? Text : "Enter your text"}</p>
      </div>
    </>
  );
}

// Title = 'Enter your Title'
// Heding = 'Enter your Heding'
// TextArea = 'Increase Text Area Y value'
// Button1Title = 'Enter your Button Title'
// Button2Title = 'Enter your Button Title'
// Button3Title = 'Enter your Button Title'
// Button4Title = 'Enter your Button Title'
// Button5Title = 'Enter your Button Title'
// Button5Title = 'Enter your Button Title'

TextFrom.propTypes = {
  Heding: PropTypes.string,
  TextArea: PropTypes.string,
  Button1Title: PropTypes.string,
  Button2Title: PropTypes.string,
  Button3Title: PropTypes.string,
  Button4Title: PropTypes.string,
  Button5Title: PropTypes.string,
  Button6Title: PropTypes.string,
};

TextFrom.defaultProps = {
  Heding: "Heding",
  TextArea: "5",
  Button1Title: "Button1",
  Button2Title: "Button2",
  Button3Title: "Button3",
  Button4Title: "Button4",
  Button5Title: "Button5",
  Button6Title: "Button5",
};

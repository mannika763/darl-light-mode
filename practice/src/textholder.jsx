import { useState } from "react";
import "./Textholder.css";

function TextHolder({ Home, AboutUs, Contact }) {
  let [text, setText] = useState("");
  let [btn, setBtn] = useState("Light Mode");

  let [myStyle, setMyStyle] = useState({
    backgroundColor: "skyblue",
    color: "black",
    borderColor: "black",
  });



  function changeColor() {
    if (myStyle.backgroundColor === "skyblue") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtn("Aqua Mode");
     }
    
    else {
      setMyStyle({backgroundColor: "skyblue",
      color: "black",
      borderColor: "black",})
      setBtn("Sky Mode");
    }
  }

  function handleSubmitUpper(e) {
    e.preventDefault();
    let set = text.toUpperCase();
    setText(set);
    console.log(set);
  }
  function handleSubmitLower(e) {
    e.preventDefault();
    let set = text.toLowerCase();
    setText(set);
    console.log(set);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <nav className="nav" style={myStyle}>
        <div className="home">{Home}</div>
        <div className="home">{AboutUs}</div>
        <div className="home">{Contact}</div>
        <div className="btn">
      <button onClick={changeColor} >{btn}</button>
      </div>
      </nav>
      <div className="main" >
        <h1>Here My Text Goes</h1>
        <textarea
          className="area"
          name="upper"
          value={text}
          onChange={handleChange}
        ></textarea>
        <br></br>
        
        <button className="mybutton" style={myStyle} onClick={handleSubmitUpper}>
          ToUpperCase
        </button>
        <button className="mybutton" style={myStyle} onClick={handleSubmitLower}>
          ToLowerCase
        </button>
        
      </div>
      
    </>
  );
}

export default TextHolder;

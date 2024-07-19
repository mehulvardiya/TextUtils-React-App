import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Successfully change to Uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Successfully change to Lowercase","success");
  };

  const handleClear=()=>{
    setText('');
    props.showAlert("Clear Text","warning");
  }

  const handleOnChange = (event) => {
    //handling Events
    setText(event.target.value);
  };

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Successfully copy text","info");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Successfully remove extra space","info");
  }
  
  const [text, setText] = useState(""); //state

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#00000059':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?'1px solid white':'1px solid black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-primary mx-1 my-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClear}>
          Reset
        </button>
      </div>

      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}

import React, { useState } from "react";

// console.log(useState("Enter t ext here2"));
export default function TextForm ( props ) {

  const handleUpClick = () => {
    // console.log("UpperCase was clicked: " +text);
    let newText = text.toUpperCase();
    setText( newText );
    props.showAlert( "Converted to Uppercase", "success" );
  };

  const handleLoClick = () => {
    // console.log("UpperCase was clicked: " +text);
    let newText = text.toLocaleLowerCase();
    setText( newText );
    props.showAlert( "Converted to Lowercase", "success" );

  };

  const handleClearClick = () => {
    // console.log("UpperCase was clicked: " +text);
    let newText = "";
    setText( newText );
    // setText("");
    props.showAlert( "Text Cleared!", "success" );

  };

  const handleOnChange = ( event ) => {
    // console.log("On change");
    setText( event.target.value );
  };

  const handleCopy = () => {
    let text = document.getElementById( "myBox" );
    text.select();
    navigator.clipboard.writeText( text.value );
    props.showAlert( "Text Copied!", "success" );

  };

  const handleExtraSpaces = () => {
    let newText = text.split( /[ ]+/ );
    setText( newText.join( " " ) );
    props.showAlert( "Extra spaces has removed!", "success" );

  };

  const [ text, setText ] = useState( "" );
  // text="new text";     //wrong way to change the text
  // setText( "new text" );  //Correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{ props.heading }</h1>
        <div className="mb-3">
          <textarea className="form-control" value={ text } onChange={ handleOnChange } style={ { backgroundColor: props.mode === "dark" ? "grey" : "white" } } id="myBox" rows="8">
          </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={ handleUpClick }>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={ handleLoClick }>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={ handleClearClick }>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={ handleCopy }>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={ handleExtraSpaces }>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>
          your text summery
        </h2>
        <p>{ text.split( " " ).length } words and { text.length } Characters</p>
        <p>{ 0.008 * text.split( "" ).length } reading time</p>
        <h2>Preview</h2>
        <p>{ text }</p>
      </div>
    </>
  );
}

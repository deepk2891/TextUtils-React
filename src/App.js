import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App () {
  const [ mode, setMode ] = useState( "light" ); //wether that dark mode is enabbled or not

  const [ alert, setAlert ] = useState( null )
  const showAlert = ( message, type ) => {
    setAlert( {
      msg: message,
      type: type
    } )

    setTimeout( () => {
      setAlert( null );
    }, 2000 )
  }


  const toggleMode = (cls) => {
    if ( mode === "light" )
    {
      setMode( "dark" );
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert( "Dark mode has been enable", "success" )
  
    }
    else
    {
      setMode( "light" );
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert( "Light mode has been enable", "success" )
      // document.title = 'TextUtils - Lightmode';
    }
  };

  return (
    <>
      <Router>
        {/* {<Navbar title="TextUtils" aboutText="About TextUtils" />} */ }
        {/* <Navbar /> */ }
        { <Navbar title="TextUtils" mode={ mode } toggleMode={ toggleMode } /> }
        <Alert alert={ alert } />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={ showAlert } heading="Try TextUtils- Word counter , Character counter , Remove extra spaces" mode={ mode } />
            </Route>
            <Route exact path="/about">
              <About mode={ mode } />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

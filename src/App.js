// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Textbox from './components/Textbox.js'
import Alert from './components/Alert.js'
import About from './components/About.js'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
    const showalert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

    const toggleMode = ()=>{
      if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0f203d";
      showalert("Dark Mode Enabled", "success");
      }
      else{
        setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled", "success");
      }
    }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <Textbox heading = "Enter Text to Analyze" mode = {mode} toggleMode = {toggleMode} showalert = {showalert}/>          
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;

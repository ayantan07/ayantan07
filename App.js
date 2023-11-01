//import logo from './logo.svg';
//import About from './components/About';
// import { useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
//  import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import About from './components/About';
//  import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Link

// // } 
// //   from "react-router-dom";

// function App() {
//   const [mode, setmode] = useState('light');
//   const [alert, setalert] = useState(null);
//   const showalert = (message,type)=>{
//     setalert({
//     msg: message,
//     type: type
//   })
//   setTimeout(() => {
//     showalert(null)
//   }, 3000);
//   }
//   const togglemode = ()=>{
//     if(mode ==='light'){
//       setmode('dark');
//       document.body.style.backgroundColor= 'grey';
//       showalert("Dark mode has enabled","Success");
      
//     }
//     else{
//       setmode('light');
//       document.body.style.backgroundColor= 'white';
//       showalert("Light mode has enabled","Success");
//     }
//   }
//   return (
//     <>
//     <Router>
//      <Navbar  title="GG" About = "About us"  mode = {mode} togglemode = {togglemode}/>
//      <Alert alert = {alert}/>
//      <div className="container" style={{color :mode === 'dark' ? 'white':'black'}}>
//      <Switch>
//           <Route exact path="/about">
//             <About />
//           </Route>
//           <Route exact path="/">
//           <TextForm showalert={showalert} heading = "Enter your details"/> 
//           </Route>
//         </Switch>
//         </div>
//         </Router>
     
//     </>
//   );
// }

// export default App;





import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle  Dark Mode
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#020334";
      showAlert(`Dark mode has been enabled`, "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert(`Light mode has been enabled`, "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
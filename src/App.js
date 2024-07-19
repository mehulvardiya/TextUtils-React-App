import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
      colorSet("dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      colorSet("light");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const colorSet = (mode) => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      if (mode === "dark") {
        button.style.backgroundColor = "transparent";
        button.style.borderColor = button.classList.contains("btn-primary")
          ? "#0d6efd"
          : button.classList.contains("btn-warning")
          ? "#ffc107"
          : button.classList.contains("btn-success")
          ? "#198754"
          : button.classList.contains("btn-danger")
          ? "#dc3545"
          : "white";
        button.style.color = button.style.borderColor;
      } else {
        button.style.backgroundColor = "";
        button.style.borderColor = "";
        button.style.color = "";
      }
    });
  };

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About us" /> */}
        {/* <Navbar/> */}

        {/*abotText default sa lai liya */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about"
              element={<About mode={mode}/>}
            />

            <Route exact path="/"
              element={<TextForm
                showAlert={showAlert}
                heading="TextUtils- Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />}
            />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

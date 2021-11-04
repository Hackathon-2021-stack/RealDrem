// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [Theme, setTheme] = useState("light");

  const [TextMod, setTextMod] = useState("dark");

  const ShowAlert = (message, type) => {
    setsAlert({
      Message: message,
      Type: type,
    });
  };

  const TheMode = () => {
    if (Theme === "light" && TextMod === "dark") {
      setTheme("dark");
      setTextMod("light");
      document.body.style.background = "#1b1b1b"; //"#343b42";
      ShowAlert("Dark mode has been Enabled", "success ");
    } else {
      setTheme("light");
      setTextMod("dark");
      document.body.style.background = "#e4eaf1";
      ShowAlert("Light mode has been Enabled", "success ");
    }
  };

  const [sAlert, setsAlert] = useState(null);


  return (
    <>
      <Router>
        <Navbar
          Title="My Real Dream"
          TitleHref="/"
          mode={Theme}
          TextMode={TextMod}
          TheMode={TheMode}
        />

        <Alert alert={sAlert} />

        <Switch>
          <Route exact path="/about">
          <About mode={Theme}  />
          </Route>
          <Route exact path="/">
            <TextFrom
              ShowAlert={ShowAlert}
              mode={Theme}
              Heding="Enter the text to analyze below."
              TextArea="10"
              Button1Title="Convert To UpperCase"
              Button2Title="Convert To LowerCase"
              Button3Title="Clear Text"
              Button4Title="Copy Text"
              Button5Title="Remove Extra Space"
              Button6Title="Cut Text"
            />
          </Route>
        </Switch>

        <div className="container my-3">
          
        </div>
      </Router>
    </>
  );
}

export default App;

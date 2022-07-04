import Navb from './component/Navb';
import Form from './component/Form';
import About from './component/About';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [btntext, setBtnText] = useState("Enable dark Mode")

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.background = 'black';
      setBtnText('Enable light Mode');
      showAlert("Dark mode has been enable", "success");

    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      setBtnText('Enable Dark Mode');
      showAlert("light mode has been enable", "success")
    }


  }

  return (

    <>
      <BrowserRouter>

        {/* probs passing */}
        <Navb title="WC Home" about="About WC" btntext={btntext} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Form showAlert={showAlert} head="Enter Your Text To Analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>

  );
}
export default App;

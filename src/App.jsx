import Date1 from "./components/Date1";
import StopWatch from "./components/StopWatch";
import Sidebar from "./components/Sidebar";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
function App() {
  const [currentTab, setCurrentTab] = useState("Clock");

  return (
    <center>
      <div className="app-container">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="app-content">
          {currentTab === "Clock" ? <Weather /> : <StopWatch />}
        </div>
      </div>
    </center>
  );
}
export default App;

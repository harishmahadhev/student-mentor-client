import { Route, Switch } from "react-router-dom";
import "./app.css";
import Home from "./Home";
import Show from "./Show";
import Topbar from "./Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="body">
        <Home />
        <Show />
      </div>
    </div>
  );
}

export default App;

import "./app.css";
import Home from "./Home";
import Topbar from "./Topbar";
import Create from './Create';
import Show from "./Show";
import Assign from "./Assign";
import Update from "./Update";
function App() {
  return (

    <div className="App">
      <Topbar />
      <div className="body">
        <Home />
        <Show />
        <Create />
        <Assign />
        <Update />
      </div>
    </div>

  );
}

export default App;

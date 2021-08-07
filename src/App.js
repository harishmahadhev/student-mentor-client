import "./app.css";
import Home from "./components/Home";
import * as api from "./api/index";
import { createContext, useEffect, useState } from 'react';
import Create from './components/create/Create';
import Update from './components/Update';
import Topbar from './components/Topbar';
import Show from './components/Show';
import Assign from './components/Assign';
export const showLoad = createContext(null);

function App() {
  const [loading, setLoading] = useState(false);
  const [mentorList, setMentor] = useState([]);
  const [studentList, setStudent] = useState([])

  const showMentor = async () => {
    setLoading(true);
    const { data } = await api.showMentor();
    setMentor(data);
    setLoading(false);
  };

  const showStudent = async () => {
    setLoading(true);
    const { data } = await api.showStudent();
    setStudent(data);
    setLoading(false);
  };

  useEffect(() => {
    showMentor();
    showStudent();
  }, []);

  return (
    <showLoad.Provider value={{ loading, setLoading, mentorList, studentList }}>
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
    </showLoad.Provider>
  );
}

export default App;

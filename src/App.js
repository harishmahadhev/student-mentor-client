import "./app.css";
import Home from "./Home";
import Topbar from "./Topbar";
import Create from './Create';
import Show from "./Show";
import Assign from "./Assign";
import Update from "./Update";
import * as api from "./api/index";
import { createContext, useEffect, useState } from 'react';
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

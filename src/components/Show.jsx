import React, { useContext } from "react";
import "../app.css";
import { useState } from "react";
import { showLoad } from "../App";
import { HashLoader } from "react-spinners";

export default function Show() {
  const [active, setActive] = useState("");
  const { loading, mentorList } = useContext(showLoad);

  const [listStudent, setListStudent] = useState([]);
  const setStudent = (students, index) => {
    setListStudent(students);
    setActive(index);
  };
  return (
    <div className="show pages" id="show">
      {loading ? (
        <div className="loader">
          <HashLoader color={"white"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <h1 className="showTitle">Mentor Details</h1>
          <div className="BookTable">
            <div className="showMentor">
              <h3 className="showTitle">Available Mentors</h3>
              <ul className="showMentorList">
                {mentorList.map((e) => (
                  <li
                    className={active === e._id ? "active" : ""}
                    key={e._id}
                    onClick={() => {
                      setStudent(e.students, e._id);
                    }}
                  >
                    {e.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="showStudent">
              {listStudent.length === 0 && active === "" ? (
                <h3 className="showTitle">Please Select Mentor</h3>
              ) : (
                <>
                  <h3 className="TableTitle"> Students</h3>
                  <ul className="showStudentList">
                    {listStudent.length === 0 ? (
                      <li>No Students Assigned</li>
                    ) : (
                      listStudent.map((e) => {
                        return <li key={e._id}>{e.name}</li>;
                      })
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import { Button, Checkbox, Radio } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import "../app.css";
import { showLoad } from "../App";
import { HashLoader } from "react-spinners";
import { useState } from "react";
import * as api from "../api/index";
import { refreshPage } from "../shared/form_schema";

export default function Assign() {
  const [selectMentorValue, setSelectMentorValue] = useState("");
  const [selectStudentValue, setSelectStudentValue] = useState([]);
  const [Data, setData] = useState("");
  const { loading, mentorList, studentList, setLoading } = useContext(showLoad);
  const handleRadioChange = (e) => setSelectMentorValue(e.target.value);
  const handleCheckChange = (e) =>
    setSelectStudentValue([...selectStudentValue, e.target.value]);

  const assignMentor = async (formdata) => {
    setLoading(true);
    const { data } = await api.assignMentor(formdata);
    setLoading(false);
    setData(data.message);
  };

  const handleSubmit = async () => {
    const request = {
      mentorId: selectMentorValue,
      studentId: selectStudentValue,
    };
    await assignMentor(request);
    setTimeout(() => {
      refreshPage();
    }, 1000);
  };

  return (
    <div className="assign pages" id="assign">
      {loading ? (
        <div className="loader">
          <HashLoader color={"white"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <h1 className="showTitle">Assign</h1>
          <div className="assignContainer">
            <div className="assignMentor">
              <h2 className="assignTitle">Mentor</h2>
              {mentorList.map((e) => {
                return (
                  <div key={e._id} className="assignMentorList">
                    <label htmlFor={e.name}>{e.name}</label>
                    <Radio
                      onChange={handleRadioChange}
                      name={e.name}
                      value={e._id}
                      checked={selectMentorValue === e._id}
                    />
                  </div>
                );
              })}
            </div>
            <div className="assignMentor">
              <h2 className="assignTitle">Available Students</h2>
              {studentList
                .filter((e) => !e.status)
                .map((e) => {
                  return (
                    <div key={e._id} className="assignStudentList">
                      <label htmlFor="student">{e.name}</label>
                      <Checkbox
                        name={e.name}
                        onChange={handleCheckChange}
                        value={e._id}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <Button type="submit" className="assignButton" onClick={handleSubmit}>
            Assign
          </Button>
          <div className="createMessage">{Data}</div>
        </>
      )}
    </div>
  );
}

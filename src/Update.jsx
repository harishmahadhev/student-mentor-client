import { Button, IconButton, Radio } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext } from "react";
import { useState } from "react";
import { showLoad } from "./App";
import { HashLoader } from "react-spinners";
import { refreshPage } from "./form_schema";
import * as api from "./api/index";

export default function Update() {
  const [selectMentorValue, setSelectMentorValue] = useState("");
  const [studentValue, setStudentValue] = useState([]);
  const [availMentor, setAvailMentor] = useState([]);
  const [mentorValue, setMentorValue] = useState("");
  const [request, setRequest] = useState({});
  const [Data, setData] = useState("");
  const { loading, setLoading, studentList, mentorList } = useContext(showLoad);

  const handleStudentRadioChange = (e) => setStudentValue(e.target.value);
  const handleMentorRadioChange = (e) => setMentorValue(e.target.value);
  const showAvailableMentors = (id) => {
    setAvailMentor(mentorList.filter((e) => e._id !== id));
  };
  const updateMentor = async (formdata) => {
    setLoading(true);
    const { data } = await api.updateMentor(formdata);
    setLoading(false);
    setData(data.message);
  };

  const handleSubmit = () => {
    updateMentor(request);
    refreshPage();
  };

  return (
    <div className="update pages" id="update">
      {loading ? (
        <div className="loader">
          <HashLoader color={"white"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <h1 className="showTitle">Update</h1>
          <div className="assignContainer">
            <div className="assignMentor">
              <h2 className="assignTitle">Students</h2>
              <div className="updateStudentList">
                {studentList.map((e) => {
                  return (
                    <div key={e._id} className="assignMentorList">
                      <label htmlFor={e.name}>{e.name}</label>
                      <Radio
                        name={e.name}
                        value={e._id}
                        checked={studentValue === e._id}
                        onChange={handleStudentRadioChange}
                        onClick={(event) => {
                          setSelectMentorValue(e.mentor);
                          setRequest({ studentId: event.target.value });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="assignMentor">
              <h2 className="assignTitle">Assigned Mentor</h2>
              {selectMentorValue ? (
                <>
                  <div className="assignStudentList">
                    <label htmlFor="student">{selectMentorValue.name}</label>
                    <IconButton
                      onClick={() =>
                        showAvailableMentors(selectMentorValue.mentorId)
                      }
                    >
                      <EditIcon className="updateIcon" />
                    </IconButton>
                  </div>
                </>
              ) : (
                <h3 className="updateTitle">Please Select Mentor</h3>
              )}
              {availMentor.length === 0 ? null : (
                <>
                  <div className="updateMentor">
                    <h3 className="updateTitle">Available Mentors</h3>
                    <ul>
                      {availMentor.map((e) => {
                        return (
                          <li key={e._id} className="assignStudentList">
                            <label htmlFor={e.name}>{e.name}</label>
                            <Radio
                              name={e.name}
                              value={e._id}
                              checked={mentorValue === e._id}
                              onChange={handleMentorRadioChange}
                              onClick={(event) => {
                                setRequest({
                                  ...request,
                                  mentorId: event.target.value,
                                });
                              }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
          <Button onClick={handleSubmit} className="updateButton">
            Update
          </Button>
        </>
      )}
      <span>{Data}</span>
    </div>
  );
}

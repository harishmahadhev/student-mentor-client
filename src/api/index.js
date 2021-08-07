import axios from 'axios';
const API = axios.create({ baseURL: "https://stu-mentor-harish.herokuapp.com" });
export const showStudent = () => API.get("/student");
export const showMentor = () => API.get("/mentor");
export const createStudent = (formdata) => API.post("/student", formdata);
export const createMentor = (formdata) => API.post("/mentor", formdata);
export const assignMentor = (formdata) => API.patch("/mentor", formdata);
export const updateMentor = (formdata) => API.patch("/student", formdata);
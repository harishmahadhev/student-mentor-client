import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as api from "./api/index";
import { useForm } from "react-hook-form";
import { showLoad } from "./App";
import { formSchema, refreshPage } from "./form_schema";

export default function CreateMentor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const { setLoading } = useContext(showLoad);
  const [Data, setData] = useState("");

  const createMentor = async (formdata) => {
    setLoading(true);
    const { data } = await api.createMentor(formdata);
    setLoading(false);
    setData(data.message);
  };

  const loginSubmit = (data) => {
    createMentor(data);
    refreshPage();
  };

  return (
    <div className="createLeft">
      <div className="createTitle">Create Mentor</div>
      <form
        autoComplete="off"
        className="createForm"
        onSubmit={handleSubmit(loginSubmit)}
      >
        <label htmlFor="name">Name</label>
        <input
          className="createInput"
          type="text"
          name="name"
          placeholder="Enter the Name"
          {...register("name")}
        />
        {errors.name && (
          <span className="createError">{errors.name.message}</span>
        )}
        <label htmlFor="email">Email</label>
        <input
          className="createInput"
          type="text"
          name="email"
          placeholder="Enter the Email"
          {...register("email")}
        />
        {errors.email && (
          <span className="createError">{errors.email.message}</span>
        )}

        <label htmlFor="phone">Phone Number</label>
        <input
          className="createInput"
          type="text"
          name="phone"
          placeholder="Enter the Phone Number"
          {...register("phone")}
        />
        <button type="submit" className="createButton">
          Create
        </button>
        <div className="createMessage">{Data}</div>
      </form>
    </div>
  );
}

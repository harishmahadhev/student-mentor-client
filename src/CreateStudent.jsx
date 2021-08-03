import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email")
    .required("This field is required"),
  name: yup.string().required("This field is required"),
  phonenumber: yup.number(),
});
export default function CreateStudent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const loginSubmit = (key, e) => {
    console.log(key);
  };
  return (
    <div className="createLeft">
      <div className="createTitle">Create Student</div>
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
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label htmlFor="email">Email</label>
        <input
          className="createInput"
          type="text"
          name="email"
          placeholder="Enter the Email"
          {...register("name")}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="phone">Phone Number</label>
        <input
          className="createInput"
          type="text"
          name="phone"
          placeholder="Enter the Phone Number"
        />
        {errors.phone && <span>{errors.phone.message}</span>}
        <button type="submit" className="createButton">
          Create
        </button>
      </form>
    </div>
  );
}

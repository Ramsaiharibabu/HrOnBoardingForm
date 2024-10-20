// src/components/HRForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./HRForm.css"; // For styling

const HRForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [employeeID, setEmployeeID] = useState("");
  const [officialMailID, setOfficialMailID] = useState("");

  const generateEmployeeID = () => {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
  };

  const onSubmit = (data) => {
    const newEmployeeID = generateEmployeeID();
    const officialMail = `${data.firstName.toLowerCase()}.${data.lastName.toLowerCase()}@hari.com`;

    setEmployeeID(newEmployeeID);
    setOfficialMailID(officialMail);

    reset();
  };

  return (
    <div className="form-container">
      <h1>HR On-Boarding Process Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="hr-form">
        <div className="form-section">
          <label>Employee ID*</label>
          <input
            type="text"
            value={employeeID || "Employee ID will appear here"}
            disabled
            className="disabled-field"
          />
        </div>

        <div className="form-section">
          <label>Official Mail ID*</label>
          <input
            type="text"
            value={officialMailID || "Employee Email ID will appear here"}
            disabled
            className="disabled-field"
          />
        </div>

        <div className="form-section">
          <label>First Name*</label>
          <input
            type="text"
            {...register("firstName", { required: true })}
            placeholder="Enter First Name"
          />
        </div>

        <div className="form-section">
          <label>Last Name*</label>
          <input
            type="text"
            {...register("lastName", { required: true })}
            placeholder="Enter Last Name"
          />
        </div>

        <div className="form-section">
          <label>Date of Birth*</label>
          <input
            type="text"
            {...register("dob", { required: true })}
            placeholder="DD/MM/YYYY"
          />
        </div>

        <div className="form-section">
          <label>Designation*</label>
          <input
            type="text"
            {...register("designation", { required: true })}
            placeholder="Enter Designation"
          />
        </div>

        <div className="form-section">
          <label>Mobile Number*</label>
          <input
            type="text"
            {...register("mobile", { required: true })}
            placeholder="Enter Mobile Number"
          />
        </div>

        <div className="form-section">
          <label>Gender*</label>
          <div className="gender-section">
            <input
              type="radio"
              value="Male"
              {...register("gender", { required: true })}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              {...register("gender", { required: true })}
            />{" "}
            Female
          </div>
        </div>

        <div className="form-section">
          <label>Terms and Mailing</label>
          <input type="checkbox" {...register("terms", { required: true })} /> I
          accept the <a href="#">Privacy Policy</a>.
        </div>

        <div className="submit-section">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HRForm;

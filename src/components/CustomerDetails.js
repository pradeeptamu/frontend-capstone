import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Invalid phone number")
    .required("Phone number is required"),
  specialRequest: Yup.string().max(200, "Max 200 characters"),
});

const UserForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    // Save form values to localStorage
    localStorage.setItem("userInfo", JSON.stringify(values));

    // Redirect to confirmation page
    navigate("/confirmed");
    // Reset the form after submission
    resetForm();
  };

  return (
    <header>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          specialRequest: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h1>Enter Your Details</h1>

          <div className="form-elements">
            <label htmlFor="firstName">First Name:</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          <div className="form-elements">
            <label htmlFor="lastName">Last Name:</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div className="form-elements">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-elements">
            <label htmlFor="phone">Phone Number:</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <div className="form-elements">
            <label htmlFor="specialRequest">Special Request:</label>
            <Field as="textarea" id="specialRequest" name="specialRequest" />
            <ErrorMessage
              name="specialRequest"
              component="div"
              className="error"
            />
          </div>

          <button aria-label="On Click" type="submit">
            Confirm Reservation
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default UserForm;

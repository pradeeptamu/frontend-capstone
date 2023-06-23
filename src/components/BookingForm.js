import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  seating: Yup.string().required("Seating option is required"),
  date: Yup.date().required("Date is required"),
  numberOfDiners: Yup.number()
    .integer("Number of diners must be an integer")
    .required("Number of diners is required")
    .positive("Number of diners must be a positive value"),
  occasion: Yup.string().required("Occasion is required"),
  time: Yup.string().required("Time is required"),
});

const seatingOptions = [
  { label: "Indoor Seating", value: "indoor" },
  { label: "Outdoor Seating", value: "outdoor" },
];

const occasionOptions = [
  { label: "Birthday", value: "birthday" },
  { label: "Anniversary", value: "anniversary" },
  { label: "Business Meeting", value: "business-meeting" },
  { label: "Casual Dining", value: "casual-dining" },
];

const BookingForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    // Save form values to localStorage
    localStorage.setItem("formValues", JSON.stringify(values));

    // Redirect to confirmation page
    navigate("/userinfo");
    // Reset the form after submission
    resetForm();
  };

  useEffect(() => {
    const storedFormValues = localStorage.getItem("formValues");
    if (storedFormValues) {
      navigate("/confirmed");
    }
  }, []);

  return (
    <header>
      <Formik
        initialValues={{
          seating: "",
          date: "",
          numberOfDiners: "",
          occasion: "",
          time: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h1>Reservations</h1>
          <div className="form-elements" style={{ display: "flex" }}>
            {seatingOptions.map((option) => (
              <div className="radio-button" key={option.value}>
                <label style={{ margin: "0" }} htmlFor={option.value}>
                  {option.label}
                </label>
                <Field
                  style={{ width: "50%" }}
                  type="radio"
                  id={option.value}
                  name="seating"
                  value={option.value}
                />
              </div>
            ))}
            <ErrorMessage name="seating" component="div" className="error" />
          </div>

          <div className="form-elements">
            <label htmlFor="date">Date:</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div className="form-elements">
            <label htmlFor="numberOfDiners">Number of Diners:</label>
            <Field type="number" id="numberOfDiners" name="numberOfDiners" />
            <ErrorMessage
              name="numberOfDiners"
              component="div"
              className="error"
            />
          </div>

          <div className="form-elements">
            <label htmlFor="occasion">Occasion:</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="">Select an occasion</option>
              {occasionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="occasion" component="div" className="error" />
          </div>

          <div className="form-elements">
            <label htmlFor="time">Time:</label>
            <Field type="time" id="time" name="time" />
            <ErrorMessage name="time" component="div" className="error" />
          </div>

          <button aria-label="On Click" type="submit">
            Reserve Table
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default BookingForm;

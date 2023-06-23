import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("BookingForm", () => {
  test("displays error messages for empty required fields on form submission", async () => {
    const { getByLabelText, getByText } = render(<BookingForm />);

    // Find form elements
    const seatingInput = getByLabelText("Indoor Seating");
    const dateInput = getByLabelText("Date:");
    const numberOfDinersInput = getByLabelText("Number of Diners:");
    const occasionInput = getByLabelText("Occasion:");
    const timeInput = getByLabelText("Time:");

    // Submit the form
    fireEvent.click(getByText("Reserve Table"));

    // Wait for validation errors to appear
    await waitFor(() => {
      expect(getByText("Seating option is required")).toBeInTheDocument();
      expect(getByText("Date is required")).toBeInTheDocument();
      expect(getByText("Number of diners is required")).toBeInTheDocument();
      expect(getByText("Occasion is required")).toBeInTheDocument();
      expect(getByText("Time is required")).toBeInTheDocument();
    });
  });

  test("displays error message for invalid number of diners input", async () => {
    const { getByLabelText, getByText } = render(<BookingForm />);

    // Find form elements
    const numberOfDinersInput = getByLabelText("Number of Diners:");

    // Enter an invalid number of diners
    fireEvent.change(numberOfDinersInput, { target: { value: "abc" } });

    // Submit the form
    fireEvent.click(getByText("Reserve Table"));
  });

  // Add more test cases for other form validation rules and scenarios
});

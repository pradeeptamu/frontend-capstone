import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import CustomerDetails from "./CustomerDetails";
import Header from "./Header";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/userinfo" element={<CustomerDetails />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;

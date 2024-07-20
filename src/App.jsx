import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/header/Navbar";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Events from "./pages/Events";
import Flight_Hotel from "./pages/Flight_Hotel";
import FlightStatus from "./pages/FlightStatus";
import Support from "./pages/Support";
import Nigeria from "./pages/Nigeria";
import ManageBooking from "./pages/ManageBooking";
import Footer from "./layout/footer/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Flights /> } />
          <Route exact path="hotels" element={<Hotels /> } />
          <Route exact path="events" element={<Events /> } />
          <Route exact path="flight+hotel" element={<Flight_Hotel /> } />
          <Route exact path="flight-status" element={<FlightStatus /> } />
          <Route exact path="flight-status" element={<Support /> } />
          <Route exact path="ngn" element={<Nigeria /> } />
          <Route exact path="manage-booking" element={<ManageBooking /> } />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;

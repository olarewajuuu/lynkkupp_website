import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/header/Navbar";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Events from "./pages/Events";
import FlightStatus from "./pages/FlightStatus";
import Support from "./pages/Support";
import Nigeria from "./pages/Nigeria";
import ManageBooking from "./pages/ManageBooking";
import Footer from "./layout/footer/Footer";
import HotelPartnerForm from "./components/auth/HotelPartnerForm";
import HotelPartnerForm2 from "./components/auth/HotelPartnerForm2";
import HotelPartnerForm3 from "./components/auth/HotelPartnerForm3";
import HotelPartnerForm4 from "./components/auth/HotelPartnerForm4";
import GuestDetails from "./pages/Book Flight/GuestDetails";
import Summary from "./pages/Book Flight/Summary";
import CardDetails from "./pages/Book Flight/CardDetails";
// import Congratulations from "./pages/Book Flight/Congratulations";
import Approved from "./pages/Book Flight/Approved";
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Flights />} />
					<Route exact path="hotels" element={<Hotels />} />
					<Route exact path="events" element={<Events />} />
					<Route exact path="flight-status" element={<FlightStatus />} />
					<Route exact path="flight-status" element={<Support />} />
					<Route exact path="ngn" element={<Nigeria />} />
					<Route exact path="manage-booking" element={<ManageBooking />} />
					<Route exact path="hotelpartner" element={<HotelPartnerForm />} />
					<Route exact path="hotelpartner2" element={<HotelPartnerForm2 />} />
					<Route exact path="hotelpartner3" element={<HotelPartnerForm3 />} />
					<Route exact path="hotelpartner4" element={<HotelPartnerForm4 />} />
					<Route exact path="guestdetails" element={<GuestDetails />} />
					<Route exact path="summary" element={<Summary />} />
					<Route exact path="carddetails" element={<CardDetails />} /> 
					{/* <Route exact path="cogratulations" element={<Congratulations />} /> */}
					<Route exact path="approved" element={<Approved />} />
				</Routes>
				<br />
				<Footer />
			</Router>
		</>
	);
}

export default App;

import logoImg from "../../assets/Images/LynkkuppimgNew 1logo.svg";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
// import SignIn from "../../components/auth/SignIn";
// import HotelPartnerForm2 from "../../components/auth/HotelPartnerForm2";
import HotelPartnerForm from "../../components/auth/HotelPartnerForm";
import Flight_Hotel from "../../components/Flight_Hotel";
// icons
import flightImg from "../../assets/Images/flightnav.svg"
import hotelImg from "../../assets/Images/hotelnav.svg"
import eventImg from "../../assets/Images/eventnav.svg"
import flight_hotelImg from "../../assets/Images/flight_hotelnav.svg"
import flightstatusImg from "../../assets/Images/flightstatusnav.svg"
import countryImg from "../../assets/Images/country.svg"
import supportImg from "../../assets/Images/support.svg"
import manageImg from "../../assets/Images/managebookingnav.svg"
import profileImg from "../../assets/Images/profile.svg"
import Login from "../../components/auth/Login";



const Navbar = () => {
	const [clicked, setClicked] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const toggleOverlay = () => {
		setIsOpen(!isOpen);
	};

	const handleClose = (e) => {
		if (e.target === e.currentTarget) {
			setIsOpen(false);
		}
	};

	const handleClicked = () => setClicked(!clicked);

	const [login, setLogin] = useState(false);

	const toggleLogin = () => {
		setLogin(!login);
	};
	const [partner, setPartner] = useState(false);

	const togglePartner = () => {
		setPartner(!partner);
	};

	return (
		<>
			<div className="navbar">
				<div className="navContainer">
					<div className="logo">
						<Link to="/">
							<img src={logoImg} alt="logo" />
						</Link>
					</div>
					<div className={clicked ? "navItems active" : "navItems"}>
						<ul>
							<li>
								<p className="options flex mr-4 md:hidden">Options</p>
								<NavLink to="/profile" activeClassName="active" className="flex  md:hidden">
									<img src={profileImg} alt="" className="mr-4"/>
									Profile
								</NavLink>
							</li>
							<p className="products flex mt-12 mr-4 md:hidden">Our products</p>
							<li  onClick={handleClicked}>
								<NavLink to="/" activeClassName="active" className="flex">
									<img src={flightImg} alt="" className="flex mr-4 md:hidden"/>
									Flights
								</NavLink>
							</li>
							<li  onClick={handleClicked}>
								<NavLink to="/hotels" activeClassName="active" className="flex">
								<img src={hotelImg} alt="" className="flex mr-4 md:hidden"/>
									Hotels
								</NavLink>
							</li>
							<li  onClick={handleClicked}>
								<NavLink to="/events" activeClassName="active" className="flex">
								<img src={eventImg} alt="" className="flex mr-4 md:hidden"/>
									Events
								</NavLink>
							</li>
							<li onClick={handleClicked}>
								<NavLink
									to="/hotels"
									activeClassName="active" className="flex"
									onClick={toggleOverlay}
								>
									<img src={flight_hotelImg} alt="" className=" mr-2 md:hidden"/>
									Flight + Hotel
								</NavLink>
								{isOpen ? (
									<div
										className="fixed inset-0 md:z-50 flex items-center justify-center md:bg-black md:bg-opacity-50"
										onClick={handleClose}
									>
										<div
											className="bg-[#fff] w-[428px] h-[600px] md:p-8 md:w-[1278px] md:h-[513px] "
											onClick={(e) => e.stopPropagation()}
										>
											<Flight_Hotel />
										</div>
									</div>
								) : (
									""
								)}
							</li>
							<p className="settings flex mr-4 md:hidden">Settings</p>
							<li  onClick={handleClicked}>
								<NavLink to="/flight-status" activeClassName="active" className="flex">
								<img src={flightstatusImg} alt="" className="flex mr-4 md:hidden"/>
									Flight status
								</NavLink>
							</li>

							<span className="space"></span>
							<li  onClick={handleClicked}>
								<NavLink to="/support" className="flex">
								<img src={supportImg} alt="" className="flex mr-4 md:hidden"/>
								Support
								</NavLink>
							</li>
							<li  onClick={handleClicked}>
								<NavLink to="/ngn" className="flex">
								<img src={countryImg} alt="" className="flex mr-4 md:hidden"/>
								NGN
								</NavLink>
							</li>
							<li  onClick={handleClicked}>
								<NavLink to="/manage-booking" className="manageBooking flex">
								<img src={manageImg} alt="" className="flex mr-4 md:hidden"/>
								Manage Booking
								</NavLink>
							</li>
					<div onClick={handleClicked} className="navBtn">
						<button onClick={toggleLogin} className="navButtonSign">
							Sign in
						</button>
					</div>
					<div onClick={handleClicked}>
						<NavLink to="/hotelpartner" activeClassName="active" className="navButtonPattern">
							Partner Form
						</NavLink>
					</div>
						</ul>
					</div>
					<div className="icons" onClick={handleClicked}>
						{!clicked ? <GiHamburgerMenu className="handbuger" /> : <ImCross  className="cross"/>}
					</div>

				</div>
			</div>

			{/* {signin && <SignIn cancelSignin={toggleSignin} />} */}
			{login && <Login cancelSignin={toggleLogin}/>}

			{partner && <HotelPartnerForm partner={togglePartner} />}
		</>
	);
};

export default Navbar;
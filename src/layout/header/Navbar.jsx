import logoImg from "../../assets/Images/LynkkuppimgNew 1logo.svg";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import SignIn from "../../components/auth/SignIn";
// import HotelPartnerForm2 from "../../components/auth/HotelPartnerForm2";
import HotelPartnerForm from "../../components/auth/HotelPartnerForm";
import Flight_Hotel from "../../components/Flight_Hotel";

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

	const [signin, setSignin] = useState(false);

	const toggleSignin = () => {
		setSignin(!signin);
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
								<NavLink to="/" activeClassName="active">
									Flights
								</NavLink>
							</li>
							<li>
								<NavLink to="/hotels" activeClassName="active">
									Hotels
								</NavLink>
							</li>
							<li>
								<NavLink to="/events" activeClassName="active">
									Events
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/hotels"
									activeClassName="active"
									onClick={toggleOverlay}
								>
									Flight + Hotel
								</NavLink>
								{isOpen ? (
									<div
										className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
										onClick={handleClose}
									>
										<div
											className="bg-[#fff] w-[428px] h-[562px] p-8 md:w-[1278px] md:h-[513px] "
											onClick={(e) => e.stopPropagation()}
										>
											<Flight_Hotel />
										</div>
									</div>
								) : (
									""
								)}
							</li>
							<li>
								<NavLink to="/flight-status" activeClassName="active">
									Flight status
								</NavLink>
							</li>

							<span className="space"></span>
							<li>
								<NavLink to="/support">Support</NavLink>
							</li>
							<li>
								<NavLink to="/ngn">NGN</NavLink>
							</li>
							<li>
								<NavLink to="/manage-booking">Manage Booking</NavLink>
							</li>
						</ul>
					</div>

					<div className="navBtn">
						<button onClick={toggleSignin} className="navButtonSign">
							Sign in
						</button>
					</div>
					<li>
						<NavLink to="/hotelpartner" activeClassName="active">
							Partner Form
						</NavLink>
					</li>
					<div className="icons" onClick={handleClicked}>
						{!clicked ? <GiHamburgerMenu /> : <ImCross />}
					</div>
				</div>
			</div>

			{signin && <SignIn cancelSignin={toggleSignin} />}

			{partner && <HotelPartnerForm partner={togglePartner} />}
		</>
	);
};

export default Navbar;

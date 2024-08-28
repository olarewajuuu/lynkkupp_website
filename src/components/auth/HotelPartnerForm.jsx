import "./HotelPartnerForm.css";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import backImg from "../../assets/Images/ep_back.svg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const HotelPartnerForm = () => {


	const [phone, setPhone] = useState("");

	const [selectedOption, setSelectedOption] = useState("");

	// Handler function to update selected option
	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const handleChange = (value) => {
		// const input = value.target.value;
		setPhone(value);
	};

	const navigate = useNavigate();

	const handleClick = () => {
	  navigate('/'); // Change '/new-page' to your desired route
	};


  return (

		<>
			<div className="wrapper">
				<div className="mobile">
					<h4 onClick={handleClick} >
						{" "}
						<img src={backImg} /> Partner with us
					</h4>
				</div>
				<h1 className="container_head">
						Partner with <span>LynKKupp</span>
					</h1>

				<div className="flex flex-row items-center justify-center px-2 md:px-0 md:gap-28 mt-10">
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row gap-2 md:gap-4 items-center">
							<img src={hotelImg} alt="hotel image" className="w-5 h-5" />

						<NavLink to="/" activeNlassName="active" className="text-[14px] md:text-[33px] font-medium text-inherit">
						I am a hotel owner
        				</NavLink>
						</div>
						<hr className="w-full bg-[#0588BD] h-1" />
					</div>

					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row gap-2 md:gap-4 items-center">
							<img src={eventImg} alt="event image" className="w-5 h-5" />
							
						<NavLink to="/hotelpartner3" activeNlassName="active" className="text-[14px] md:text-[33px] font-medium text-inherit">
						I handle event ticketing
                		</NavLink>
						
						</div>	
					</div>
				
				</div>
				<div className="container">

					<h3 className="caption">Part 1 (Hotel Details)</h3>
					<form action="">
						<div className="form">
							<div className="hotelName">
								<label htmlFor="Hotel Name">Hotel Name*</label>
								<br />
								<input type="text" placeholder="Hotel Name" />
							</div>
							<div className="contact">
								<div className="contact1">
									<label htmlFor="Contact1">Contact 1*</label>
									<br className="gap" />
									<PhoneInput
										className="phone"
										country={"ng"}
										value={phone}
										onChange={handleChange}
										inputProps={{
											require: true,
										}}
									/>
								</div>
								<div className="contact2">
									<label htmlFor="Contact2">Contact 2*</label>
									<br />
									<input
										className="whatsapp"
										type="text"
										placeholder="Whatsapp number"
									/>
								</div>
							</div>
							<div className="address">
								<label htmlFor="Detailed address*">Detailed address*</label>
								<br />
								<input type="text" placeholder="Enter address" />
							</div>
							<div className="place">
								<div className="city">
									<label htmlFor="City*">City*</label>
									<br />
									<input type="text" placeholder="City*s" />
								</div>

								<div className="state">
									<label htmlFor="State*">State*</label>
									<br />
									<select
										name=""
										className="state_input"
										value={selectedOption}
										onChange={handleSelectChange}
									>
										<option value="State"> State </option>
										<option value="Abia "> Abia </option>
										<option value="Adamawa"> Adamawa </option>
										<option value="Akwa Ibom"> Akwa Ibom</option>
										<option value="Bauchi"> Bauchi </option>
										<option value="Bayelsa"> Bayelsa </option>
										<option value="Benue"> Benue </option>
										<option value="Borno"> Borno </option>
										<option value="Cross River"> Cross River </option>
										<option value="Delta"> Delta </option>
										<option value="Ebonyi"> Ebonyi </option>
										<option value="Edo"> Edo </option>
										<option value="Ekiti"> Ekiti </option>
										<option value="Enugu"> Enugu </option>
										<option value="Imo">Imo</option>
										<option value="Jigawa"> Jigawa</option>
										<option value="Kaduna"> Kaduna </option>
										<option value="Kano"> Kano </option>
										<option value="Katsina"> Katsina </option>
										<option value="Kebbi">Kebbi </option>
										<option value="Kogi"> Kogi </option>
										<option value="Kwara"> Kwara </option>
										<option value="Lagos"> Lagos </option>
										<option value="Nasarawa"> Nasarawa </option>
										<option value="Niger"> Niger </option>
										<option value="Ogun"> Ogun </option>
										<option value="Ondo"> Ondo </option>
										<option value="Osun"> Osun</option>
										<option value="Oyo"> Oyo </option>
										<option value="Plateau"> Plateau </option>
										<option value="Rivers"> Rivers </option>
										<option value="Sokoto"> Sokoto </option>
										<option value="Taraba"> Taraba </option>
										<option value="Yobe"> Yobe </option>
										<option value="Zamfara"> Zamfara </option>
									</select>
								</div>
							</div>

							<div className="website">
								<label htmlFor="Hotel website">Hotel website</label>
								<br />
								<input type="text" placeholder="Website (if any)" />
							</div>

							<div className="cac">
								<label htmlFor="cac">CAC*</label>
								<br />
								<input type="text" placeholder="Enter CAC Number" />
							</div>
						</div>
						<Link to="/hotelpartner2">
							<button className="form_btn">Continue</button>
						</Link>
					</form>
				</div>
			</div>

		</>
	);
};

export default HotelPartnerForm;

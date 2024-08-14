import "./HotelPartnerForm.css";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import backImg from "../../assets/Images/ep_back.svg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import HotelPartnerForm2 from "./HotelPartnerForm2";
import Ticketing from "./Ticketing";
import { Link } from "react-router-dom";

const HotelPartnerForm = ({ partner }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const handleClick = (e) => {
    e.preventDefault();
    toggleClass();
  };

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

  const [partner2, setPartner2] = useState(false);

  const togglePartner2 = () => {
    setPartner2(!partner2);
  };
  const [ticketing, setticketing] = useState(false);

  

  const handleClosePartner = (e) => {
    e.preventDefault();
    partner();
  };


  return (
		<>
			<div className="wrapper">
				<div className="mobile">
					<h4>
						{" "}
						<img src={backImg} onClick={handleClosePartner} /> Partner with us
					</h4>
				</div>
				<div className="container">
					<h1 className="container_head">
						Partner with <span>LynKKupp</span>
					</h1>
					<ul className="list">
						<Link>
							<a href="" onClick={handleClick} className="active">
								<img src={eventImg} />
								<span>I am a hotel owner</span>
							</a>
						</Link>
						<Link to="/hotelpartner3">
              <img src={hotelImg} />
              <span>I handle event ticketing</span>           
						</Link>
					</ul>
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
			{close && <div>Hello</div>}
			{partner2 && <HotelPartnerForm2 partner2={togglePartner2} />}
			{ticketing && <Ticketing />}
		</>
	);
};

export default HotelPartnerForm;

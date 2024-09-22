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
			<div className="w-full flex flex-col items-center justify-center text-[#494949] relative bg-white overflow-hidden">

				<main className="wrapper w-full md:w-[1011px] text-center">
					<div className="mobile hidden">
						<h4 onClick={handleClick} >
							{" "}
							<img src={backImg} /> Partner with us
						</h4>
					</div>

					<div className="w-full md:w-[929px] flex flex-row justify-center p-5">
						<h1 className="m-0 relative text-[23px] md:text-[48px] font-bold">
							<span className="text-inherit">Partner with</span>
							<span className="text-[#55BFEA]"> LynKKupp</span>
						</h1>
					</div>
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
						<div className="flex mt-10 px-2 md:px-0">
							<h1 className="text-inherit text-[16px] md:text-[40px] font-bold">
								Part 1 (Hotel Details)
							</h1>
						</div>
						<form action="" className="mt-10 px-2 md:px-0 md:mt-16">
							{/* Hotel Name start  */}
							<div className="mb-4 flex flex-col">
								<label
									htmlFor="hotelName"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Hotel Name*
								</label>
								<input
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									id="hotelName"
									type="text"
									placeholder="Hotel Name"
									required
								/>
							</div>
							{/* Hotel Name end  */}

							{/* Contact start  */}
							<div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
								<div className="flex flex-col w-full md:w-auto">
									<h1 className="flex mb-2 font-medium text-[13px] md:text-[16px]">
										Contact 1*
									</h1>
									<PhoneInput
										className="w-full md:w-[489px] h-[54px] text-[11px] md:text-[13px] "
										name="phone"
										country={"ng"}
										value={phone}
										onChange={handleChange}
										required
										inputProps={{
											required: true,
											placeholder: "Phone Number",

										}}
										inputStyle={{
											textAlign: "left",

											height: "54px",
											width: "100%",
											borderColor: "#494949",
										}}
									/>
								</div>

								<div className="mb-4 flex flex-col">
									<label
										htmlFor="Whatsapp"
										className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
									>
										Contact 2
									</label>
									<input
										className="border border-[#494949] rounded-md w-full md:w-[489px] text-[11px] md:text-[13px] p-4 "
										id="whatsapp"
										type="text"
										placeholder="Whatsapp number"
									/>
								</div>

							</div>
							{/* Contact end  */}

							{/* Detailed address start  */}
							<div className="mb-4 flex flex-col">
								<label
									htmlFor="Address"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Detailed address*
								</label>
								<input
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									id="address"
									type="text"
									placeholder="Enter address"
									required
								/>
							</div>

							{/* Detailed address end  */}


							{/* Location start  */}
							<div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
								<div className="mb-4 flex flex-col">
									<label
										htmlFor="City*"
										className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
									>
										City*
									</label>
									<input
										className="border border-[#494949] rounded-md w-full md:w-[489px] text-[11px] md:text-[13px] p-4 "
										id="City"
										type="text"
										placeholder="City"
										required
									/>
								</div>
								{/* state starts  */}
								<div className="flex flex-col w-full md:w-auto">
									<label
										htmlFor="State"
										className="flex mb-2 font-medium text-[13px] md:text-[16px]"
									>
										State*
									</label>
									<select
										name=""
										className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[489px] h-[54px] p-4"
										value={selectedOption}
										onChange={handleSelectChange}
									>
										<option value="Select Location"> Select Location</option>
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

								{/* state ends */}
							</div>
							{/* Location ends  */}


							{/* Website start */}
							<div className="mb-4 flex flex-col">
								<label
									htmlFor="website"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Hotel website
								</label>
								<input
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									id="website"
									type="text"
									placeholder="Website (if any)"
								/>
							</div>
							{/* Website ends */}
							{/* RC start */}
							<div className="mb-4 flex flex-col">
								<label
									htmlFor="RC"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Hotel website
								</label>
								<input
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									id="RC"
									type="text"
									placeholder="Enter RC Number"
								/>
							</div>
							{/* RC ends */}




							<Link to="/hotelpartner2" className="mt-14 flex">
								<button className="text-white bg-[#55bfea] py-3.5 px-5 w-full text-[13px] md:text-[23px] font-bold rounded-md">
									Continue
								</button>
							</Link>
						</form>
					</div>
				</main>
			</div>
		</>
	);
};

export default HotelPartnerForm;

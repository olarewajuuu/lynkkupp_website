import { useState } from "react";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const HotelPartnerForm3 = () => {
	const [phone, setPhone] = useState("");
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (value) => {
		// const input = value.target.value;
		setPhone(value);
	};

	// Handler function to update selected option
	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className="w-full flex flex-col items-center justify-center text-[#494949] relative bg-white overflow-hidden">
			<main className="w-full md:w-[1011px] text-center">
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
							<h1 className="text-[16px] md:text-[33px] font-medium text-inherit">
								I am a hotel owner
							</h1>
						</div>
						<hr />
					</div>
					<div className="flex flex-col w-full md:w-auto">
						<div className="flex flex-row gap-2 md:gap-4 items-center">
							<img src={eventImg} alt="event image" className="w-5 h-5" />
							<h1 className="text-[16px] md:text-[33px] font-medium text-inherit">
								I handle event ticketing
							</h1>
						</div>
						<hr className="w-full bg-[#0588BD] h-1" />
					</div>
				</div>
				<div className="flex mt-10 px-2 md:px-0">
					<h1 className="text-inherit text-[16px] md:text-[40px] font-bold">
						Part 1 (event Details)
					</h1>
				</div>
				<form action="" className="mt-10 px-2 md:px-0 md:mt-16">
					<div className="mb-4 flex flex-col">
						<label
							htmlFor="Event"
							className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
						>
							Event Name*
						</label>
						<input
							className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
							id="username"
							type="text"
							placeholder="Movie night, Conference, Concert"
						/>
					</div>
					<div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
						<div className="flex flex-col w-full md:w-auto">
							<h1 className="flex mb-2 font-medium text-[13px] md:text-[16px]">
								Chief organizer&apos;s Phone Number
							</h1>
							<PhoneInput
								className="w-full md:w-[400px] h-16 text-[11px] md:text-[13px] "
								name="phone"
								country={"ng"}
								value={phone}
								onChange={handleChange}
								inputProps={{
									required: true,
									placeholder: "Phone Number",
								}}
								inputStyle={{
									textAlign: "left",

									height: "64px",
									width: "100%",
									borderColor: "#494949",
								}}
							/>
						</div>
						<div className="flex flex-col w-full md:w-auto">
							<label
								htmlFor="Location"
								className="flex mb-2 font-medium text-[13px] md:text-[16px]"
							>
								Location*
							</label>
							<select
								name=""
								className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[400px] h-16 p-4"
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
					</div>
					<div className="flex flex-col mt-10">
						<label
							className="text-inherit flex mb-2 text-[13px] md:text-[16px] font-medium"
							htmlFor="Additional details"
						>
							Additional details
						</label>
						<textarea className="border border-[#494949] bg-[transparent] [outline:none] p-6 rounded-md overflow-hidden h-[314px]" />
					</div>
					<Link to="/hotelpartner4" className="mt-14 flex">
						<button className="text-white bg-[#55bfea] py-3.5 px-5 w-full text-[13px] md:text-[23px] font-bold rounded-md">
							Continue
						</button>
					</Link>
				</form>
			</main>
		</div>
	);
};

export default HotelPartnerForm3;

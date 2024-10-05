import { useState } from "react";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import backImg from "../../assets/Images/ep_back.svg";
// Link,
import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
import {
	TextField,
	MenuItem,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormControl,
	TextareaAutosize,
} from "@mui/material";
import { useNavigate } from "react-router-dom";



const states = [
	{ value: "Abia", label: ' Abia' },
	{ value: "Adamawa", label: 'Adamawa' },
	{ value: "Akwa Ibom", label: 'Akwa Ibom' },
	{ value: "Bauchi", label: ' Bauchi' },
	{ value: "Bayelsa", label: ' Bayelsa' },
	{ value: "Benue", label: ' Benue' },
	{ value: "Borno", label: ' Borno' },
	{ value: "Cross River", label: 'Cross River' },
	{ value: "Delta", label: ' Delta' },
	{ value: "Ebonyi", label: ' Ebonyi' },
	{ value: "Edo", label: ' Edo' },
	{ value: "Ekiti", label: ' Ekiti' },
	{ value: "Enugu", label: ' Enugu' },
	{ value: "Imo", label: 'Imo' },
	{ value: "Jigawa", label: ' Jigawa' },
	{ value: "Kaduna", label: ' Kaduna' },
	{ value: "Kano", label: ' Kano' },
	{ value: "Katsina", label: ' Katsina' },
	{ value: "Kebbi", label: 'Kebbi' },
	{ value: "Kogi", label: ' Kogi' },
	{ value: "Kwara", label: ' Kwara' },
	{ value: "Lagos", label: ' Lagos' },
	{ value: "Nasarawa", label: ' Nasarawa' },
	{ value: "Niger", label: ' Niger' },
	{ value: "Ogun", label: ' Ogun' },
	{ value: "Ondo", label: ' Ondo' },
	{ value: "Osun", label: ' Osun' },
	{ value: "Oyo", label: ' Oyo' },
	{ value: "Plateau", label: 'Plateau' },
	{ value: "Rivers", label: ' Rivers' },
	{ value: "Sokoto", label: ' Sokoto' },
	{ value: "Taraba", label: ' Taraba' },
	{ value: "Yobe", label: ' Yobe' },
	{ value: "Zamfara", label: ' Zamfara' },
];




const HotelPartnerForm3 = () => {

	const [formData, setFormData] = useState({
		eventName: "",
		phoneNumber: "",
		state: '',
		eventDate: "",
		eventTime: "",
		eventLocation: "in-person",
		eventVenue1: "",
		eventVenue2: "",
		entry: "yes",
		eventPrice: "",
		eventTags: "",
		aboutEvent: "",
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handlePhoneChange = (value) => {
		setFormData({
			...formData,
			phoneNumber: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add validation if needed
		if (Object.values(formData).every((field) => field !== "")) {
			navigate("/hotelpartner4"); // On successful submission, navigate to the next page
		} else {
			alert("Please fill in all fields.");
		}
	};

	const handleClick = () => {
		navigate('/hotelpartner'); // Change '/new-page' to your desired route
	};

	return (
		<div>
			<div className="w-full flex flex-col items-center justify-center text-[#494949] relative bg-white overflow-hidden">

				<main className="wrapper w-full md:w-[1011px] text-center">
					<div onClick={handleClick} className="w-full h-[49px] bg-[#55BFEA] flex flex-row justify-start items-center gap-4 pl-6  md:hidden">
						<img src={backImg} />
						<h4 className=" text-[#fff]">
							Partner with us
						</h4>
					</div>

					<div className="w-full md:w-[929px] flex flex-row justify-center p-5">
						<h1 className="m-0 relative text-[23px] md:text-[48px] font-bold">
							<span className="text-inherit">Partner with</span>
							<span className="text-[#55BFEA]"> LynKKupp</span>
						</h1>
					</div>
					<div className="flex flex-row items-center justify-center px-2 md:px-0 md:gap-0 mt-10 border-b-4">
						<div className="flex flex-col w-full pl-0 md:justify-center md:items-center ">
							<div className="flex flex-row gap-2 md:gap-4 items-center">
								<img src={hotelImg} alt="hotel image" className="w-5 h-5" />

								<NavLink to="/hotelpartner" activeNlassName="active" className="text-[0.9rem] md:text-[33px] font-medium text-inherit">
									I am a hotel owner
								</NavLink>
							</div>
							{/* <hr className="w-[489px] bg-[#0588BD] h-1" /> */}
						</div>

						<div className="flex flex-col w-full pl-0 md:justify-center md:items-center border-b-4 border-[#0588BD]">
							<div className="flex flex-row gap-0 md:gap-4 items-center">
								<img src={eventImg} alt="event image" className="w-5 h-5" />

								<NavLink to="/hotelpartner3" activeNlassName="active" className="text-[0.9rem] md:text-[33px] font-medium text-inherit">
									I handle event ticketing
								</NavLink>

							</div>
						</div>

					</div>

					<div className="container">
						<div className="flex mt-10 px-2 md:px-0">
							<h1 className="text-inherit text-[16px] md:text-[40px] font-bold">
								Part 1 (event Details)
							</h1>
						</div>

						<form action="" onSubmit={handleSubmit} className="mt-6 px-2 md:px-0 md:mt-10"  >
							{/* Event Name start  */}

							<div className="mb-4 flex flex-col">
								<label
									htmlFor="hotelName"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Event Name*
								</label>
								<TextField
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									required
									fullWidth
									label="Movie night, Conference, Concert"
									name="eventName"
									value={formData.eventName}
									onChange={handleInputChange}
								/>
							</div>
							{/* Event Name ends  */}

							{/* Contact start  */}
							<div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
								<div className="flex flex-col w-full md:w-auto">
									<h1 className="flex mb-2 font-medium text-[13px] md:text-[16px]">
										Chief organizer’s phone number
									</h1>
									<PhoneInput
										className="w-full md:w-[489px] h-[54px] text-[11px] md:text-[13px] "
										country={'ng'} // Default country (can be changed)
										value={formData.phoneNumber}
										onChange={handlePhoneChange}
										label='Phone number'
										inputStyle={{
											width: '489px',
											height: '54px',
											paddingLeft: '48px' // Adjust for country code
										}}
										containerStyle={{ width: '100%' }}
										inputProps={{
											name: 'phoneNumber',
											required: true,
											autoFocus: false,
										}}
									/>
								</div>

								<div className="mb-4 flex flex-col">
									<label
										htmlFor="Whatsapp"
										className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
									>
										Location*
									</label>
									<TextField
										className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[489px] h-[54px] "
										// fullWidth
										select
										label="Select state"
										name="state"
										value={formData.state}
										onChange={handleInputChange}
										required

									>
										{states.map((option) => (
											<MenuItem key={option.value} value={option.value} className="mr-11">
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>

							</div>
							{/* Contact end  */}
							{/* Date and Time start  */}
							<div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
								<div className="flex flex-col w-full md:w-auto">
									<h1 className="flex mb-2 font-medium text-[13px] md:text-[16px]">
										Date of event*
									</h1>
									<TextField
										className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[489px] h-[54px] "
										required
										// fullWidth
										type="date"
										name="eventDate"
										// label="Event Date"
										InputLabelProps={{ shrink: true }}
										value={formData.eventDate}
										onChange={handleInputChange}
									/>
								</div>

								<div className="mb-4 flex flex-col">
									<label
										htmlFor="Whatsapp"
										className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
									>
										Time of event*
									</label>
									<TextField
										className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[489px] h-[54px] "
										required
										// fullWidth
										type="time"
										name="eventTime"
										// label="Event Time"
										InputLabelProps={{ shrink: true }}
										value={formData.eventTime}
										onChange={handleInputChange}
									/>
								</div>

							</div>
							{/* Date and Time end  */}


							{/* Event Location Starts */}
							<div className="flex flex-col md:flex-row justify-start gap-8 mt-4">
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Event Location</FormLabel> */}
									<h4 className="font-bold text-[16px] text-left">Event location type*</h4>
									<RadioGroup
										name="entry"
										value={formData.entry}
										onChange={handleInputChange}
										row
									>
										<FormControlLabel
											value="in-person"
											control={<Radio />}
											label="In-person"
										/>
										<FormControlLabel
											value="online"
											control={<Radio />}
											label="Online"
										/>
									</RadioGroup>
								</FormControl>
							</div>
							<div className="flex flex-col md:flex-row justify-between gap-8 mt-8">

							</div>
							{/* Event Location ends */}

							{/* Person Start  */}
							{/* Date and Time start  */}
							<div className="flex flex-col md:flex-row justify-between gap-8 mt-0">
								<div className="flex flex-col w-full md:w-auto">
									<h1 className="flex mb-2 font-medium text-[13px] md:text-[16px]">
										If In-person*
									</h1>
									<TextField
										className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[489px] h-[54px] "
										required
										// fullWidth
										label="Venue name"
										name="eventVenue1"
										value={formData.eventVenue1}
										onChange={handleInputChange}
									/>
								</div>

								<div className="mb-4 flex flex-col">
									<label
										htmlFor="Whatsapp"
										className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
									>
										If online *
									</label>
									<TextField
										required
										className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[489px] h-[54px] "
										// fullWidth
										label="Event Link"
										name="eventVenue2"
										value={formData.eventVenue2}
										onChange={handleInputChange}
									/>
								</div>
							</div>
							{/* Person end */}

							{/* Entry Yes/No start */}
							<div className="flex flex-col md:flex-row justify-start gap-8 mt-4">
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Event Location</FormLabel> */}
									<h4 className="font-bold text-[16px] text-left">Is it free*</h4>
									<RadioGroup
										name="eventLocation"
										value={formData.eventLocation}
										onChange={handleInputChange}
										row
									>
										<FormControlLabel
											value="yes"
											control={<Radio />}
											label="Yes"
										/>
										<FormControlLabel
											value="no"
											control={<Radio />}
											label="No"
										/>
									</RadioGroup>
								</FormControl>
							</div>

							{/* Entry Yes/No end */}

							{/* If no start */}
							<div className="mb-4 flex flex-col mt-4">
								<label
									htmlFor="EventPrice"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Event Price*
								</label>
								<TextField
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									required
									// fullWidth
									label="Event Price"
									name="eventPrice"
									value={formData.eventPrice}
									onChange={handleInputChange}
								/>
							</div>
							{/* If no end */}
							{/* Search tags start */}
							<div className="mb-4 flex flex-col mt-4">
								<label
									htmlFor="SearchTags"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Search tags*
								</label>
								<TextField
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									required
									// fullWidth
									label="Event Tags"
									name="eventTags"
									value={formData.eventTags}
									onChange={handleInputChange}
								/>
							</div>
							{/* Search tags end */}
							{/* About event start */}
							<div className="mb-4 flex flex-col mt-4">
								<label
									htmlFor="AboutEvent"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									About event*
								</label>
								<TextareaAutosize
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									required
									minRows={12}
									name="aboutEvent"
									// style={{ width: "100%" }}
									value={formData.aboutEvent}
									onChange={handleInputChange}
								/>
							</div>
							{/* About event end */}

							<button
								className="text-white bg-[#55bfea] py-3.5 px-5 w-full text-[13px] md:text-[23px] font-bold rounded-md"
								type="submit"
							>
								Continue
							</button>

						</form>
					</div>
				</main>
			</div>

		</div>
	);
};

export default HotelPartnerForm3;

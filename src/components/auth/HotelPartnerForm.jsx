import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import backImg from "../../assets/Images/ep_back.svg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { TextField, MenuItem, } from '@mui/material';
// import 'react-phone-input-2/lib/style.css';



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


const HotelPartnerForm = () => {

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/'); // Change '/new-page' to your desired route
	};

	const [formData, setFormData] = useState({
		name: '',
		phoneNumber: '',
		whatsapp: '',
		address: '',
		city: '',
		state: '',
		website: '',
		rc: '',
	});
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
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
		console.log('Form Data:', formData);
		// Handle form submission logic here
		navigate('/hotelpartner2');
	};

	return (

		<>
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
						<div className="flex flex-col w-full pl-0 md:justify-center md:items-center border-b-4 border-[#0588BD]">
							<div className="flex flex-row gap-2 md:gap-4 items-center">
								<img src={hotelImg} alt="hotel image" className="w-5 h-5" />

								<NavLink to="/hotelpartner" activeNlassName="active" className="text-[0.8rem] md:text-[33px] font-medium text-inherit">
									I am a hotel owner
								</NavLink>
							</div>
							{/* <hr className="w-[489px] bg-[#0588BD] h-1" /> */}
						</div>

						<div className="flex flex-col w-full pl-0 md:justify-center md:items-center ">
							<div className="flex flex-row gap-0 md:gap-4 items-center">
								<img src={eventImg} alt="event image" className="w-5 h-5" />

								<NavLink to="/hotelpartner3" activeNlassName="active" className="text-[0.8rem] md:text-[33px] font-medium text-inherit">
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
						<form action="" className="mt-6 px-2 md:px-0 md:mt-10" onSubmit={handleSubmit} >
							{/* Hotel Name start  */}
							<div className="mb-4 flex flex-col">
								<label
									htmlFor="hotelName"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Hotel Name*
								</label>
								<TextField
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									fullWidth
									label="Name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							{/* Hotel Name end  */}

							{/* Contact start  */}
							<div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
								<div className="flex flex-col w-full md:w-auto">
									<h1 className="flex mb-2 font-medium text-[13px] md:text-[16px]">
										Contact 1*
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
										Contact 2
									</label>
									<TextField
										className="border border-[#494949] rounded-md w-full md:w-[489px] text-[11px] md:text-[13px] p-4 "
										// fullWidth
										label="Whatsapp"
										name="Whatsapp"
										value={formData.name}
										onChange={handleChange}

									/>
								</div>

							</div>
							{/* Contact end  */}

							{/* Detailed address start  */}
							<div className="mb-4 flex flex-col mt-4">
								<label
									htmlFor="Address"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Detailed address*
								</label>
								<TextField
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									// fullWidth
									label="Address"
									name="address"
									value={formData.address}
									onChange={handleChange}
									required
									
								/>
							</div>

							{/* Detailed address end  */}


							{/* Location start  */}
							<div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
								<div className="mb-4 flex flex-col">
									<label
										htmlFor="City*"
										className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
									>
										City*
									</label>
									<TextField
										className="border border-[#494949] rounded-md w-full md:w-[489px] text-[11px] md:text-[13px] p-4 "
										// fullWidth
										label="City"
										name="city"
										value={formData.city}
										onChange={handleChange}
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
									<TextField
										className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px]  md:w-[489px] h-[54px] "
										// fullWidth
										select
										label="Select state"
										name="state"
										value={formData.state}
										onChange={handleChange}
										required

									>
										{states.map((option) => (
											<MenuItem key={option.value} value={option.value} className="mr-11">
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>

								{/* state ends */}
							</div>
							{/* Location ends  */}


							{/* Website start */}
							<div className="mb-4 flex flex-col mt-6">
								<label
									htmlFor="website"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									Hotel website
								</label>
								<TextField
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									fullWidth
									label="website"
									name="website"
									value={formData.website}
									onChange={handleChange}

								/>
							</div>
							{/* Website ends */}
							{/* RC start */}
							<div className="mb-4 flex flex-col mt-8">
								<label
									htmlFor="RC"
									className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-2"
								>
									RC
								</label>
								<TextField
									className="border border-[#494949] rounded-md w-full text-[11px] md:text-[13px] p-4 "
									fullWidth
									label="RC"
									name="rc"
									value={formData.rc}
									onChange={handleChange}

								/>
							</div>
							{/* RC ends */}
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
		</>
	);
};

export default HotelPartnerForm;

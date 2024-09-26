// import "./HotelPartnerForm2.css";
import backImg from "../../assets/Images/ep_back.svg";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
// import uploadImg from "../../assets/Images/uploadimg.svg";
// import uploadImg2 from "../../assets/Images/AddRoom.svg";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Error from "../../utility/Error";
import Input from "../../utility/Input";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, RadioGroup, FormControlLabel, Radio, Checkbox, Box, Typography, FormControl, FormLabel, Grid, TextField } from '@mui/material';
import FileUpload1 from "../../utility/FileUpload1";
import FileUpload2 from "../../utility/FileUpload2";

const HotelPartnerForm2 = ({ partner2 }) => {

	// const navigate = useNavigate();

	const [formData, setFormData] = useState({
		file1: null,
		file2: null,
		selectedOption: '',
		checkbox1: false,
		checkbox2: false,
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleCheckboxChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.checked,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.file1 || !formData.file2 || !formData.selectedOption || !formData.checkbox1 || !formData.checkbox2) {
			alert('Please complete all required fields.');
			return;
		}

		console.log('Form Data:', formData);
		// navigate('/success');
	};

	const handleClosePartner = (e) => {
		e.preventDefault();
		partner2()
	}

	return (
		<div>
			<div className="w-full flex flex-col items-center justify-center text-[#494949] relative bg-white overflow-hidden">

				<main className="wrapper w-full md:w-[1011px] text-center">
					<div onClick={handleClosePartner} className="w-full h-[49px] bg-[#55BFEA] flex flex-row justify-start items-center gap-4 pl-6  md:hidden">
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
					<div className="flex flex-row items-center justify-center px-2 md:px-0 md:gap-28 mt-10 border-b-4">
						<div className="flex flex-col w-full pl-0 md:pl-12 border-b-4 border-[#0588BD]">
							<div className="flex flex-row gap-2 md:gap-4 items-center">
								<img src={hotelImg} alt="hotel image" className="w-5 h-5" />

								<NavLink to="/" activeNlassName="active" className="text-[0.9rem] md:text-[33px] font-medium text-inherit">
									I am a hotel owner
								</NavLink>
							</div>
							{/* <hr className="w-[489px] bg-[#0588BD] h-1" /> */}
						</div>

						<div className="flex flex-col w-full pl-0 md:pl-4 ">
							<div className="flex flex-row gap-2 md:gap-4 items-center">
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
								Part 2 (Uploads)
							</h1>
						</div>

						<form action="" className="mt-6 px-2 md:px-0 md:mt-10">
							{/* upload start  */}

							<div className="flex flex-col mt-10">
								<label
									className="text-inherit flex mb-2 text-[13px] md:text-[16px] font-medium"
									htmlFor="Additional details"
								>
									Hotel Front View*
								</label>
								<FileUpload1

									file={formData.file1}
									setFile={(file) => setFormData({ ...formData, file1: file })}
								/>
							</div>
							{/* upload ends */}

							{/* Rooms & Prices start  */}
							<div className="mt-32">
								<label htmlFor="Rooms&Prices" className="text-inherit flex mb-2 text-[13px] md:text-[16px] font-medium">Rooms & Prices*</label>
								<div className="flex w-full border-[2px] h-[1151px] border-[#494949] rounded-[6px]">
									<div>
										<FileUpload2
											file={formData.file2}
											setFile={(file) => setFormData({ ...formData, file2: file })}
										/>
										<div>
											<div>
												<input type="text" className="border border-[#494949] rounded-[2px] w-[218px] h-[30px] mt-5" />
											</div>
											<FormControl component="fieldset" required className="ml-[-85px]">
												<FormLabel component="legend" className="font-bold">Select room type</FormLabel>
												<RadioGroup
													name="selectedOption"
													value={formData.selectedOption}
													onChange={handleChange}
												>
													<FormControlLabel value="standard  " control={<Radio />} label="Standard  " />
													<FormControlLabel value="classic " control={<Radio />} label="Classic " />
													<FormControlLabel value="executive " control={<Radio />} label="Executive " />
													<FormControlLabel value="presidential" control={<Radio />} label="Presidential" />
												</RadioGroup>
											</FormControl>
										</div>
									</div>

								</div>
							</div>
							{/* Rooms & Prices ends */}


							{/* Submit btn start  */}
							<Link to="/hotelpartner2" className="mt-14 flex">
								<button type="submit" className="text-white bg-[#55bfea] py-3.5 px-5 w-full text-[13px] md:text-[23px] font-bold rounded-md">
									Continue
								</button>
							</Link>
							{/* Submit btn ends */}
						</form>

					</div>
				</main>
			</div>
		</div>
	);
};

export default HotelPartnerForm2;

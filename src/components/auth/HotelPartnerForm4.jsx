import { useState } from "react";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import uploadImg from "../../assets/Images/uploadimg.svg";
import backImg from "../../assets/Images/ep_back.svg";
import { NavLink } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system"
import Alert from "@mui/material/Alert";
import FileUpload1 from "../../utility/FileUpload1";


const HotelPartnerForm4 = () => {
	const [checked, setChecked] = useState(false);
	const [errorMessage, setErrorMessage] = useState(""); // State for error message
	const navigate = useNavigate();


	const [formData, setFormData] = useState({
		file1: null,

	})

	// if (!formData.file1 || !formData.file2 || !formData.file3 || !formData.file4 || !formData.file5 || !formData.file6 || !formData.price || !formData.price1 || !formData.price2 || !formData.price3 || !formData.price4 || !formData.price5 || !formData.selectedOption || !formData.selectedOption1 || !formData.selectedOption2 || !formData.selectedOption3 || !formData.selectedOption4 || !formData.checkbox1 || !formData.checkbox2) {
	// 	alert('Please complete all required fields.');
	// 	return;
	// }
	// console.log('Form Data:', formData);

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!formData.file1 && !checked) {
			setErrorMessage("Please upload a file and agree to the terms.");
		} else if (!formData.file1) {
			setErrorMessage("Please upload a file.");
		} else if (!checked) {
			setErrorMessage("Please agree to the terms.");
		} else {
			// Reset error message on successful validation
			setErrorMessage("");
			// Navigate to the next page
			navigate("/next-page");
		}
	};

	return (
		<div>
			<div className="w-full flex flex-col items-center justify-center text-[#494949] relative bg-white overflow-hidden">

				<main className="wrapper w-full md:w-[1011px] text-center">
					<div className="w-full h-[49px] bg-[#55BFEA] flex flex-row justify-start items-center gap-4 pl-6  md:hidden">
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
								Part 2 (Upload)
							</h1>
						</div>
						<form onSubmit={handleSubmit}>
							<label
								htmlFor="hotelName"
								className="flex text-inherit text-[13px] md:text-[16px] font-medium mb-6 mt-10"
							>
								A copy of ticket
							</label>
							<br /> <br /> <br />
							<div className="flex justify-center items-center md:w-full border-[2px] md:h-[327px] border-[#49494] rounded-[6px] w-[390px] h-[175px] m-[auto]">
								
								<FileUpload1

									file={formData.file1}
									setFile={(file) => setFormData({ ...formData, file1: file })}
								/>
							</div>

							<div className="mb-20 mt-32">
										<FormControlLabel
											id="terms"
											onChange={(e) => setChecked(e.target.checked)}
											control={<Checkbox name="terms" />}
										/>
										<label htmlFor="" className=" text-[11px] md:text-[16px] font-[500] ml-[-20px]">Click here to indicate that you <a href="" className="text-[#55BFEA]">agree</a> to the terms and <a href="" className="text-[#55BFEA]">conditions</a> set forth by Lynkkupp</label>
									</div>
							{/* Custom Error Message */}
							{errorMessage && (
								<Alert severity="error" sx={{ mt: 2 }}>
									{errorMessage}
								</Alert>
							)}

							<button
								className="text-white bg-[#55bfea] py-3.5 px-5 w-full text-[13px] md:text-[23px] font-bold rounded-md"
								type="submit"

							>
								Proceed to submit
							</button>
						</form>
					</div>
				</main>
			</div>

		</div>
	);
};

export default HotelPartnerForm4;


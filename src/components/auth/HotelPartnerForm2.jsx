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
		file3: null,
		file4: null,
		file5: null,
		file6: null,
		price: '',
		price1: '',
		price2: '',
		price3: '',
		price4: '',
		price5: '',
		selectedOption: '',
		selectedOption1: '',
		selectedOption2: '',
		selectedOption3: '',
		selectedOption4: '',
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
		// const { file1, file2, price, selectedOption, checkbox1, checkbox2 } = formData;
		if (!formData.file1 || !formData.file2 || !formData.file3 || !formData.file4 || !formData.file5 || !formData.file6 || !formData.price || !formData.price1 || !formData.price2 || !formData.price3 || !formData.price4 || !formData.price5 || !formData.selectedOption || !formData.selectedOption1 || !formData.selectedOption2 || !formData.selectedOption3 || !formData.selectedOption4 || !formData.checkbox1 || !formData.checkbox2) {
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
					<div className="flex flex-row items-center justify-center px-6 md:px-0 md:gap-28 mt-10 border-b-4">
						<div className="flex flex-col w-full pl-0 md:pl-12 border-b-4 border-[#0588BD]">
							<div className="flex flex-row gap-2 md:gap-4 items-center">
								<img src={hotelImg} alt="hotel image" className="w-5 h-5" />

								<NavLink to="/" activeNlassName="active" className="text-[0.8rem] md:text-[33px] font-medium text-inherit">
									I am a hotel owner
								</NavLink>
							</div>
							{/* <hr className="w-[489px] bg-[#0588BD] h-1" /> */}
						</div>

						<div className="flex flex-col w-full pl-0 md:pl-4">
							<div className="flex flex-row gap-0 md:gap-4 items-center">
								<img src={eventImg} alt="event image" className="w-5 h-5" />

								<NavLink to="/hotelpartner3" activeNlassName="active" className="text-[0.8rem] md:text-[33px] font-medium text-inherit">
									I handle event ticketing
								</NavLink>

							</div>
						</div>

					</div>

					<div className="container px-4">
						<div className="flex mt-10 px-2 md:px-0">
							<h1 className="text-inherit text-[16px] md:text-[40px] font-bold">
								Part 2 (Uploads)
							</h1>
						</div>

						<form action="" className="mt-6 px-2 md:px-0 md:mt-10" onSubmit={handleSubmit}>
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
								<div className="w-full md:border-[2px] h-[1551px] md:h-[1251px] md:border-[#494949] rounded-[6px] md:p-[50px]">


									<h4 className="text-[19px] font-[700] mb-9 px-[50px]">Upload at least 5 rooms and state your price <span className="text-[14px] font-[500]"> that stand out from the competition</span></h4>
									<div className="grid grid-cols-2 md:grid-cols-3 gap-6 ml-[-10px]">
										{/* First  */}
										<div>
											<FileUpload2
												file={formData.file6}
												setFile={(file) => setFormData({ ...formData, file6: file })}
											/>
											<div className="text-left">
												<div>
													<input value={formData.price}
														onChange={handleChange} placeholder="Price" type="text" className="border border-[#494949] rounded-[2px] w-[160px] h-[30px] md:w-[218px] md:h-[30px] mt-6 mb-9 pl-4" />
												</div>

												<FormControl component="fieldset" required className="ml-10">
													{/* <FormLabel component="legend" className="font-extrabold"></FormLabel> */}
													<label htmlFor="" className="font-extrabold text-[19px]">Select room type</label>
													<RadioGroup
														name="selectedOption"
													// value={formData.selectedOption}
													// onChange={handleChange}
													>
														<FormControlLabel value="standard  " control={<Radio />} label="Standard  " />
														<FormControlLabel value="classic " control={<Radio />} label="Classic " />
														<FormControlLabel value="executive " control={<Radio />} label="Executive " />
														<FormControlLabel value="presidential" control={<Radio />} label="Presidential" />
													</RadioGroup>
												</FormControl>
												<div className="flex flex-col mt-3">
													<div >

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox1}
																	// onChange={handleCheckboxChange}
																	name="checkbox1"
																// required
																/>
															}
														// label="Refundable"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
													<div>

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox2}
																	// onChange={handleCheckboxChange}
																	name="checkbox2"
																// required
																/>
															}
														// label="Checkbox 2 (Required)"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
												</div>
											</div>
										</div>



										{/* Two  */}
										<div>
											<FileUpload2
												file={formData.file2}
												setFile={(file) => setFormData({ ...formData, file2: file })}
											/>
											<div className="text-left">
												<div>
													<input value={formData.price2}
														onChange={handleChange} placeholder="Price" type="text"  className="border border-[#494949] rounded-[2px] w-[160px] h-[30px] md:w-[218px] md:h-[30px] mt-6 mb-9 pl-4" />
												</div>
												<p></p>
												<FormControl component="fieldset" required className="ml-10">
													{/* <FormLabel component="legend" className="font-extrabold"></FormLabel> */}
													<label htmlFor="" className="font-extrabold text-[19px]">Select room type</label>
													<RadioGroup
														name="selectedOption"
													// value={formData.selectedOption1}
													// onChange={handleChange}
													>
														<FormControlLabel value="standard" control={<Radio />} label="Standard  " />
														<FormControlLabel value="classic" control={<Radio />} label="Classic " />
														<FormControlLabel value="executive" control={<Radio />} label="Executive " />
														<FormControlLabel value="presidential" control={<Radio />} label="Presidential" />
													</RadioGroup>
												</FormControl>
												<div className="flex flex-col mt-3">
													<div >

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox1}
																	// onChange={handleCheckboxChange}
																	name="checkbox1"
																// required
																/>
															}
														// label="Refundable"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
													<div>

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox2}
																	// onChange={handleCheckboxChange}
																	name="checkbox2"
																// required
																/>
															}
														// label="Checkbox 2 (Required)"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
												</div>
											</div>
										</div>



										{/* Three  */}
										<div>
											<FileUpload2
												file={formData.file3}
												setFile={(file) => setFormData({ ...formData, file3: file })}
											/>
											<div className="text-left">
												<div>
													<input value={formData.price3}
														onChange={handleChange} placeholder="Price" type="text"  className="border border-[#494949] rounded-[2px] w-[160px] h-[30px] md:w-[218px] md:h-[30px] mt-6 mb-9 pl-4" />
												</div>
												<p></p>
												<FormControl component="fieldset" required className="ml-10">
													{/* <FormLabel component="legend" className="font-extrabold"></FormLabel> */}
													<label htmlFor="" className="font-extrabold text-[19px]">Select room type</label>
													<RadioGroup
														name="selectedOption"
													// value={formData.selectedOption2}
													// onChange={handleChange}
													>
														<FormControlLabel value="standard  " control={<Radio />} label="Standard  " />
														<FormControlLabel value="classic " control={<Radio />} label="Classic " />
														<FormControlLabel value="executive " control={<Radio />} label="Executive " />
														<FormControlLabel value="presidential" control={<Radio />} label="Presidential" />
													</RadioGroup>
												</FormControl>
												<div className="flex flex-col mt-3">
													<div >

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox1}
																	// onChange={handleCheckboxChange}
																	name="checkbox1"
																// required
																/>
															}
														// label="Refundable"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
													<div>

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox2}
																	// onChange={handleCheckboxChange}
																	name="checkbox2"
																// required
																/>
															}
														// label="Checkbox 2 (Required)"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
												</div>
											</div>
										</div>



										{/* Four  */}
										<div>
											<FileUpload2
												file={formData.file4}
												setFile={(file) => setFormData({ ...formData, file4: file })}
											/>
											<div className="text-left">
												<div>
													<input value={formData.price4}
														onChange={handleChange} placeholder="Price" type="text"  className="border border-[#494949] rounded-[2px] w-[160px] h-[30px] md:w-[218px] md:h-[30px] mt-6 mb-9 pl-4" />
												</div>
												<p></p>
												<FormControl component="fieldset" required className="ml-10">
													{/* <FormLabel component="legend" className="font-extrabold"></FormLabel> */}
													<label htmlFor="" className="font-extrabold text-[19px]">Select room type</label>
													<RadioGroup
														name="selectedOption"
													// value={formData.selectedOption3}
													// onChange={handleChange}
													>
														<FormControlLabel value="standard  " control={<Radio />} label="Standard  " />
														<FormControlLabel value="classic " control={<Radio />} label="Classic " />
														<FormControlLabel value="executive " control={<Radio />} label="Executive " />
														<FormControlLabel value="presidential" control={<Radio />} label="Presidential" />
													</RadioGroup>
												</FormControl>
												<div className="flex flex-col mt-3">
													<div >

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox1}
																	// onChange={handleCheckboxChange}
																	name="checkbox1"
																// required
																/>
															}
														// label="Refundable"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
													<div>

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox2}
																	// onChange={handleCheckboxChange}
																	name="checkbox2"
																// required
																/>
															}
														// label="Checkbox 2 (Required)"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
												</div>
											</div>
										</div>



										{/* Five  */}
										<div>
											<FileUpload2
												file={formData.file5}
												setFile={(file) => setFormData({ ...formData, file5: file })}
											/>
											<div className="text-left">
												<div>
													<input value={formData.price5}
														onChange={handleChange} placeholder="Price" type="text"  className="border border-[#494949] rounded-[2px] w-[160px] h-[30px] md:w-[218px] md:h-[30px] mt-6 mb-9 pl-4" />
												</div>
												<p></p>
												<FormControl component="fieldset" required className="ml-10">
													{/* <FormLabel component="legend" className="font-extrabold"></FormLabel> */}
													<label htmlFor="" className="font-extrabold text-[19px]">Select room type</label>
													<RadioGroup
														name="selectedOption"
													// value={formData.selectedOption4}
													// onChange={handleChange}
													>
														<FormControlLabel value="standard  " control={<Radio />} label="Standard  " />
														<FormControlLabel value="classic " control={<Radio />} label="Classic " />
														<FormControlLabel value="executive " control={<Radio />} label="Executive " />
														<FormControlLabel value="presidential" control={<Radio />} label="Presidential" />
													</RadioGroup>
												</FormControl>
												<div className="flex flex-col mt-3">
													<div >

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox1}
																	// onChange={handleCheckboxChange}
																	name="checkbox1"
																// required
																/>
															}
														// label="Refundable"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
													<div>

														<FormControlLabel
															control={
																<Checkbox
																	// checked={formData.checkbox2}
																	// onChange={handleCheckboxChange}
																	name="checkbox2"
																// required
																/>
															}
														// label="Checkbox 2 (Required)"
														/>
														<label htmlFor="" className="text-[#55BFEA] text-[11px] ml-[-20px] font-[500]">Refundable</label>
													</div>
												</div>
											</div>
										</div>







									</div>
								</div>
							</div>
							{/* Rooms & Prices ends */}

							{/*Hotel facilities and features start */}
							<div className="text-left mt-10 md:mt-20">
								<label htmlFor="Rooms&Prices" className="text-inherit flex mb-6 text-[13px] md:text-[16px] font-medium ">Hotel facilities and features</label>
								<div className="flex flex-col">
									<FormControlLabel
										control={<Checkbox name="pool" />}
										label="Swimming Pool"
									/>
									<FormControlLabel
										control={<Checkbox name="wifi" />}
										label="Wi-Fi"
									/>
									<FormControlLabel
										control={<Checkbox name="breakfast" />}
										label="Breakfast"
									/>
									<FormControlLabel
										control={<Checkbox name="gym" />}
										label="Gym"
									/>
									<input type="text" placeholder="Other facilities" className="w-[316px] border-b-4 border-[#494949] border-dotted focus:outline-none mt-4 mb-8" />

									{/* Terms and conditions */}
									<div className="mb-20">
										<FormControlLabel
											id="terms"
											control={<Checkbox name="terms" />}
										/>
										<label htmlFor="" className=" text-[11px] md:text-[16px] font-[500] ml-[-15px]">Click here to indicate that you <a href="" className="text-[#55BFEA]">agree</a> to the terms and <a href="" className="text-[#55BFEA]">conditions</a> set forth by Lynkkupp</label>
									</div>
								</div>
							</div>
							{/*Hotel facilities and features end */}


							{/* Submit btn start  */}

							<button type="submit" className="text-white bg-[#55bfea] py-3.5 px-5 w-full text-[13px] md:text-[23px] font-bold rounded-md">
								Continue
							</button>

							{/* Submit btn ends */}
						</form>

					</div>
				</main>
			</div>
		</div>
	);
};

export default HotelPartnerForm2;

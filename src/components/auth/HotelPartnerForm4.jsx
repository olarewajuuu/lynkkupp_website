import { useState } from "react";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import Error from "../../utility/Error";
import uploadImg from "../../assets/Images/uploadimg.svg";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

const HotelPartnerForm4 = () => {
	const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "image/png": [".png", ".jpg", ".jpeg"],
      },

      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        );
      },
    });


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
						<Link to="/hotelpartner" className="flex flex-row gap-2 md:gap-4 items-center">
							<img src={hotelImg} alt="hotel image" className="w-5 h-5" />
							<h1 className="text-[16px] md:text-[33px] font-medium text-inherit">
								I am a hotel owner
							</h1>
						</Link>
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
						Part 2 (Upload)
					</h1>
				</div>
				<form action="" className="mt-10 px-2 md:px-0 md:mt-16">

					<div className="flex flex-col mt-10">
						<label
							className="text-inherit flex mb-2 text-[13px] md:text-[16px] font-medium"
							htmlFor="Additional details"
						>
							A copy of ticket*
						</label>
				 <div {...getRootProps({ className: "input_upload" })}>
					<input
               type="file"
            accept="image/*"
            {...getInputProps({ className: "input_field" })}
            hidden
          />
		  <img src={uploadImg} width={200} alt="" />
		  {files.map((file) => (
              <div className="preview" key={file.name}>
                <img
                  src={file.preview}
                  alt=""
                  className="image_preview"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              </div>
            ))}

		   <div className="filesAccepted">
              {acceptedFiles[0] ? (
                <p className="file_accepted">File accepted</p>
              ) : (
                ""
              )}
            </div>
		 <div className="fileNotAccepted">
              {fileRejections[0] ? (
                <Error errorM={fileRejections[0].errors[0]} />
              ) : (
                ""
              )}
            </div>
		  </div>
				 </div>
					
					<div className="mt-14 flex">
						<button className="text-white bg-[#55bfea] py-3.5 px-5 w-full text-[13px] md:text-[23px] font-bold rounded-md">
							Proceed to submit
						</button>
					</div>
				</form>
			</main>
		</div>
	);
};

export default HotelPartnerForm4;


import "./HotelPartnerForm2.css";
import backImg from "../../assets/Images/ep_back.svg";
import hotelImg from "../../assets/Images/clarity_calendar-line.jpg";
import eventImg from "../../assets/Images/guidance_hotel-room.svg";
import uploadImg from "../../assets/Images/uploadimg.svg";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Error from "../../utility/Error";
import Input from "../../utility/Input";
import { NavLink } from "react-router-dom";

const HotelPartnerForm2 = () => {
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
    <div className="upload">
      <div className="mobile_upload md:hidden">
        <NavLink to="/hotelpartner" className="flex items-center gap-4">
        <img src={backImg}/> Partner with us
          </NavLink>
      </div>
      <div className="container_upload">
        <h1 className="container_head_upload">
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
        <h3 className="caption_upload">Part 2 (Uploads)</h3>
      </div>
      <form action="">
        <h4 className="input_caption">Hotel Front View*</h4>

        <div {...getRootProps({ className: "input_upload" })}>
          <input
            type="file"
            accept="image/*"
            {...getRootProps({ className: "input_field" })}
            hidden
          />
          <img src={uploadImg} width={200} alt="" />
          <div>
            <div></div>

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
        <h4 className="rooms">Rooms & Prices*</h4>
        <p className="rooms_description"> <span>Upload at least 5 rooms and state your price</span>that stand out from the competition</p>
        <div className="input_div">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        </div>
        <div className="facilities">
          <h4 className="facilities_des">Hotel facilities and features</h4>
          <div className="check_box" >
            <input type="checkbox" /> <label htmlFor="airCon">Air conditioning</label>
          </div>
          <div className="check_box" >
            <input type="checkbox" /> <label htmlFor="Bar/lounge">Bar/lounge</label>
          </div>
          <div className="check_box" >
            <input type="checkbox" /> <label htmlFor="Kitchen">Kitchen</label>
          </div>
          <div className="check_box" >
            <input type="checkbox" /> <label htmlFor="Security">Security</label>
          </div>
          <input type="text" placeholder="Other facilities" className="others"/>
        </div>
      </form>

      <button className="form_btn" >Proceed to submit</button>

    </div>
  );
};

export default HotelPartnerForm2;

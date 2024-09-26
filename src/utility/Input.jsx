import uploadImg from "../../src/assets/Images/AddRoom.svg";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Error from "../utility/Error";
import "./Input.css";



const Input = (props) => {
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


  // Radio validatioon starts
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setError(''); // clear error if a value is selected
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedOption) {
      setError('Please select an option.');
    } else {
      // Perform submit logic here
      console.log('Selected option:', selectedOption);
    }
  };

  // Radio validatioon ends

  return (
    <div>
      <form action="" className="flex flex-col">

        <div {...getRootProps({ className: "img_input_upload" })}>
          <input
            type="file"
            accept="image/*"
            {...getRootProps({ className: "img_input_field" })}
            hidden
          />
          <img src={uploadImg} width={44} alt="" />
          <div>
            <div></div>

            {files.map((file) => (
              <div className="img_preview" key={file.name}>
                <img
                  src={file.preview}
                  alt=""
                  className="img_image_preview"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              </div>
            ))}

            <div className="img_filesAccepted">
              {acceptedFiles[0] ? (
                <p className="img_file_accepted">File accepted</p>
              ) : (
                ""
              )}
            </div>

            <div className="img_fileNotAccepted">
              {fileRejections[0] ? (
                <Error errorM={fileRejections[0].errors[0]} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="text-left">
          <input type="text"
           placeholder="Price" 
           className="border-[#494949] border-2 w-[218px] rounded-[2px] px-2 mt-5 focus:outline-none py-1" />
          <div className="mt-10">
            <h1 className="mb-3 text-[19px] font-[500]">Select room type</h1>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mt-2">
                <input 
                type="radio" 
                id="Standard" 
                name="roomType" 
                value="Standard" 
                checked={selectedOption === 'Standard'} 
                onChange={handleOptionChange}
                className="w-[20px] h-[20px] cursor-pointer" />
                <label htmlFor="Standard" className="text-[16px] cursor-pointer"> Standard</label>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input 
                type="radio" 
                id="Classic" 
                name="roomType" 
                value="Classic" 
                checked={selectedOption === 'Classic'} 
                onChange={handleOptionChange}
                className="w-[20px] h-[20px] cursor-pointer" />
                <label htmlFor="Classic" className="text-[16px] cursor-pointer"> Classic</label>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input 
                type="radio" 
                id="Executive" 
                name="roomType" 
                value="Executive" 
                checked={selectedOption === 'Executive'} 
                onChange={handleOptionChange}
                className="w-[20px] h-[20px] cursor-pointer" />
                <label htmlFor="Executive" className="text-[16px] cursor-pointer"> Executive</label>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input 
                type="radio" 
                id="Presidential" 
                name="roomType" 
                value="Presidential" 
                checked={selectedOption === 'Presidential'} 
                onChange={handleOptionChange}
                className="w-[20px] h-[20px] cursor-pointer" />
                <label htmlFor="Presidential" className="text-[16px] cursor-pointer"> Presidential</label>
              </div>
              
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Input
import uploadImg from "../../src/assets/Images/AddRoom.svg";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Error from "../utility/Error";
import "./Input.css"

const Input = () => {
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
    <div>
         <form action="">

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
        <input type="text" placeholder="Price" className="price" />
      </form>
    </div>
  )
}

export default Input
import "../components/auth/HotelPartnerForm2.css"

const Error = ({errorM}) => {
  if(errorM.code=="file-invalid-type"){
    return <p className="error_text">File Not Valid choose a .png .jpg .jpeg</p>
  }
  if(errorM.code =="too-many-files"){
    return <p className="error_text">Max one file is allowed</p>
  }

}

export default Error
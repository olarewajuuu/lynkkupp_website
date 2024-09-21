import "./ResetLink.css";
import backImg from "../../assets/Images/ep_back.svg" 

const ResetLink = ({cancelReset}) => {

  return (
    <div>
        <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    onClick={cancelReset}
    >
      <div className="reset_container"
      onClick={(e) => e.stopPropagation()}
      >
      <div className="reset_mobile" >
      <p onClick={cancelReset}  className="mobile md:flex items-center gap-0 text-white"> <img src={backImg }  /> Password reset</p>
      </div>

        {/* <div className="overlay" onClick={cancelSignin} ></div> */}
        <div className="reset_content">
          <h3>Check your inbox </h3>
          <p  className="text-[13px]">In the next few minutes, you will receive an email with a link to reset your password. Please follow the link to proceed.</p>
          <br />
          
          <br />
          <div className="resetBtn">
            <button type="submit" >Back to sign in</button>
          </div>
          <br />
          <hr />
          <p className="text-center text-[13px] mt-7">
            {" "}
            By signing in or creating an account, you agree with our{" "}
            <a href="" target="_blank" className="text-[#55bfea]">
              Terms & conditions
            </a>{" "}
            and{" "}
            <a href="" target="_blank" className="text-[#55bfea]">
              Privacy statement
            </a>
          </p>
          
        </div>
        
      </div>
      {/* {resetlink && <Password cancelPassword = {handleSubmit} /> } */}
    </div>
    </div>
  )
}

export default ResetLink
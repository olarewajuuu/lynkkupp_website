import "./ForgetPassword.css";
import backImg from "../../assets/Images/ep_back.svg" 
import { useState } from "react";
import ResetLink from "./ResetLink";


const ForgetPassword = ({toggleForgetpassword}) => {


    const [formData, setFormData] = useState({
        email: ''
      }) 
    
    
      const [errors, setErrors] = useState({})
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
          ...formData, [name] : value
        })
      }
    
        // Toggle resetlink
      const [resetlink, setResetlink] = useState(false)
    
    
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.email.trim()) {
          validationErrors.email = "email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
           validationErrors.email = "email is not valid"
        }
    
        setErrors(validationErrors)
    
        if(Object.keys(validationErrors).length === 0)
          setResetlink(!resetlink)
    
      }




  return (
    <div>
        <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    onClick={toggleForgetpassword}
    >
      <div className="forget_container"
      onClick={(e) => e.stopPropagation()}
      >
      <div className="forget_mobile" >
      <p onClick={toggleForgetpassword}  className="mobile md:flex items-center gap-0 text-white"> <img src={backImg }  /> Password reset</p>
      </div>

        {/* <div className="overlay" onClick={cancelSignin} ></div> */}
        <div className="forget_content">
          <h3>Forgotten your password? </h3>
          <p  className="text-[13px]">No worries! we’ll send you a reset link, please enter the email address you use to login to <a className="text-[#55bfea] cursor-pointer" >LYNKKUPP</a></p>
          <br />
          <form className="forget_form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <br />
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
            {errors.email && <span className="errors">{errors.email}</span>} 
          </form>
          <br />
          <div className="forgetBtn">
            <button type="submit" onClick={handleSubmit}>Send reset link</button>
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
      {resetlink && <ResetLink cancelReset = {handleSubmit}/> }
    </div>
    </div>
  )
}

export default ForgetPassword
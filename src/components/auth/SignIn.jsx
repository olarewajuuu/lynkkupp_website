import "./SignIn.css";
import fbImg from "../../assets/Images/Group 44.svg";
import ggImg from "../../assets/Images/png-transparent-google-logo-google-text-trademark-logo-removebg-preview 1.svg";
import apImg from "../../assets/Images/Group 42.svg";
import backImg from "../../assets/Images/ep_back.svg" 
import { useState } from "react";
import Password from "./Password";


const SignIn = ({cancelSignin}) => {
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

    // Toggle password
  const [signin, setSignin] = useState(false)



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
      setSignin(!signin)

  }


  return (
    <div className="contain">
      <div className="singin_container">
      <div className="sign_mobile" >
      <p> <img src={backImg } onClick={cancelSignin} /> Sign in</p>
      </div>

        <div className="overlay"></div>
        <div className="signin_content">
          <h3>Sign in or create an account</h3>
          <form onSubmit={handleSubmit}>
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
          <div className="signinBtn">
            <button type="submit" onClick={handleSubmit}>Continue with email</button>
          </div>
          <p className="altsignin">Or login with</p>
          <div className="socialIcons">
            <div className="icon">
              <img src={fbImg} alt="" />
              <p>Facebook</p>
            </div>
            <div className="icon">
              <img src={ggImg} alt="" />
              <p>Google</p>
            </div>
            <div className="icon">
              <img src={apImg} alt="" />
              <p>Apple</p>
            </div>
          </div>
          <p className="text">
            {" "}
            By signing in or creating an account, you agree with our{" "}
            <a href="" target="_blank">
              Terms & conditions and Privacy statement
            </a>{" "}
            and{" "}
            <a href="" target="_blank">
              Privacy statement
            </a>
          </p>
        </div>
      </div>
      {signin && <Password cancelPassword = {handleSubmit} /> }
    </div>
  );
};

export default SignIn;

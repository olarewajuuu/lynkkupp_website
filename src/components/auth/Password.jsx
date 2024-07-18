import { useState } from "react";
import backImg from "../../assets/Images/ep_back.svg"
import "./Password.css"




const Password = ({cancelPassword}) => {
    
  // const [password, setPassword] = useState('');
  // const [validationMessage, setValidationMessage] = useState('');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*]/.test(password);

    if (!lengthCriteria) {
      return 'Password must be at least 8 characters long.';
    }
    if (!uppercaseCriteria) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!lowercaseCriteria) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!numberCriteria) {
      return 'Password must contain at least one number.';
    }
    if (!specialCharCriteria) {
      return 'Password must contain at least one special character (!@#$%^&*).';
    }

    // return 'Password is valid!';


  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValidationMessage(validatePassword(newPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmMessage(newConfirmPassword === password ? '' : 'Passwords do not match.');


  };

  // const handleSubmit = () => {
  //   if(Object.keys(handleConfirmPasswordChange).length === 0)
  //     alert("Form Submitted Successfully")
  // };



  return (
    <div>
    
      <div className="password_content">
      <div className="password_mobile" >
      
      <p className="sm:flex items-center gap-3 text-white"><img src={backImg } onClick={cancelPassword} /> Sign in</p>
      </div>
      <div className="overlay" onClick={cancelPassword} ></div>
      <h3>Create password</h3>
      <p className="headline">Use a minimum of 8 characters, including uppercase letters, lowercase letters and numbers.</p>
        <form >
          <label htmlFor="password">Password</label>
          <br />
          <div className="passcon">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder="Enter a password"
            onChange={handlePasswordChange}
            
          />
          <span onClick={toggleShowPassword} className="showPassword">
          {showPassword ? '❌' : '👁️'}
        </span>
        </div>
          <span className="password_errors">{validationMessage}</span>
          <br/> 
          <br />

          <label htmlFor="" >Confirm Password</label>
          <br />

          <div className="passcon">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <span onClick={toggleShowPassword} className="showConfirmPassword">
          {showPassword ? '❌' : '👁️'}
        </span>
        </div>
          <span className="password_errors">{confirmMessage}</span>
        
        </form>
        <div className="passwordBtn">
          <button type="submit" >Create account</button>
        </div>
        <p className="passwordtext">
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
  );
};

export default Password;

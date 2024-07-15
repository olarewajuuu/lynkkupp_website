# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







<!-- import { useState } from "react";
import "./Password.css"


const Password = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
      }) 

      const [errors, setErrors] = useState({})


      const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
          ...formData, [name] : value
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.password.trim()) {
          validationErrors.password = "password is required"
        } else if(formData.password.length < 8){
           validationErrors.password = "password should at least 8 characters"
        }

        if(formData.confirmPassword !== formData.password){
            validationErrors.confirmPassword = "password not matched"
        }
    
        setErrors(validationErrors)
    
        if(Object.keys(validationErrors).length === 0)
            alert("Form Submitted Successfully")
    
      }
    

  return (
    <div>
    
      <div className="password_content">
      <h3>Create password</h3>
      <p>Use a minimum of 8 characters, including uppercase letters, lowercase letters and numbers.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Password</label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Enter a password"
            // pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
            onChange={handleChange}
          />
          {errors.password && <span className="errors">{errors.password}</span>}
          <br/> 
          <br />
          <label htmlFor="" >Confirm Password</label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Confirm password"
            // pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="errors">{errors.confirmPassword}</span>} 
        </form>
        <div className="passwordBtn">
          <button type="submit" onClick={handleSubmit}>Create account</button>
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

export default Password; -->

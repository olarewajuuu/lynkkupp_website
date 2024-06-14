import "./SignIn.css"
import fbImg from "../../src/assets/Images/Group 44.svg"
import ggImg from "../../src/assets/Images/png-transparent-google-logo-google-text-trademark-logo-removebg-preview 1.svg"
import apImg from "../../src/assets/Images/Group 42.svg"



const SignIn = () => {
  return (
    <div>
        <div className="singin_container">
            <div className="overlay"></div>
            <div className="signin_content">
                <h3>Sign in or create an account</h3>
                <form action="">
                    <label htmlFor="email">Email address</label>
                    <br />
                    <input type="email" placeholder="Enter your email address" />
                </form>
                <div className="signinBtn">
                    <button>Continue with email</button>
                </div>
                <p className="altsignin">Or login with</p>
                <div className="socialIcons">
                    <div className="icon">
                        <img src= {fbImg} alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className="icon">
                        <img src= {ggImg} alt="" />
                        <p>Google</p>
                    </div>
                    <div className="icon">
                        <img src= {apImg} alt="" />
                        <p>Apple</p>
                    </div>
                </div>
                <p className="text"> By signing in or creating an account, you agree with our <a href="" target="_blank">Terms & conditions and Privacy statement</a> and <a href="" target="_blank">Privacy statement</a></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn
import logoImg from "../../assets/Images/LynkkuppimgNew 1logo.svg";
import "./Footer.css"
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footerlogo">
                <div className="logo">
                    <a href=""><img src= {logoImg} alt="" /></a>
                </div>
            </div>
            <div className="footerbody"> 
                <div>
                    <h4>Corporate</h4>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Lynkkupp Affilate</p>
                    <p>Workforce</p>
                </div>
                <div>
                    <h4>Countries</h4>
                    <p>Nigeria</p>
                    <p>Ghana</p>
                    <p>Rwanda</p>
                    <p>Uganda</p>
                    <p>South Africa</p>
                </div>
                <div>
                    <h4>Legal</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <p>Facebook</p>
                    <p>Twitter X</p>
                    <p>Instagram</p>
                </div>
                <div>
                    <h4>Support</h4>
                    <p>Contact us</p>
                    <p>FAQS</p>
                    <p>Live Chat</p>
                </div>

            </div>
        </div>
    </>
   
  )
}

export default Footer

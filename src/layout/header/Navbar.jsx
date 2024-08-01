import logoImg from "../../assets/Images/LynkkuppimgNew 1logo.svg";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import SignIn from "../../components/auth/SignIn";
// import HotelPartnerForm2 from "../../components/auth/HotelPartnerForm2";
import HotelPartnerForm from "../../components/auth/HotelPartnerForm";


const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClicked = () =>(setClicked(!clicked))

  const [signin, setSignin] = useState(false)

  const toggleSignin = () => {
    setSignin(!signin)
  }
  const [partner, setPartner] = useState(false)

  const togglePartner = () => {
    setPartner(!partner)

  }

  const handleFunction = () => {
    togglePartner()
    handleClicked()
  };


  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <div className="logo">
            <Link to="/"><img src={logoImg} alt="logo" /></Link>
          </div>
          <div className={clicked ? "navItems active": "navItems" }>
            <ul>

                <li><NavLink to="/" activeNlassName="active">Flights</NavLink></li>
                <li><NavLink to="/hotels" activeNlassName="active">Hotels</NavLink></li>
                <li><NavLink to="/events" activeNlassName="active">Events</NavLink></li>
                <li><NavLink to="/flight+hotel" activeNlassName="active">Flight + Hotel</NavLink></li>
                <li><NavLink to="/flight-status" activeNlassName="active">Flight status</NavLink></li>


                <span className="space"></span>
                <li><NavLink to="/support">Support</NavLink></li>
                <li><NavLink to="/ngn">NGN</NavLink></li>
                <li><NavLink to="/manage-booking">Manage Booking</NavLink></li>
            </ul>
          </div>

          <div className="navBtn">
            <button 
            onClick={toggleSignin}
            className="navButtonSign">Sign in</button>
            <button className= {clicked ? "navButtonPat active": "navButtonPat"} onClick={handleFunction} >Partern with us </button>
          </div>
          <div className="icons" onClick={handleClicked}>
          {!clicked? <GiHamburgerMenu /> : <ImCross />}
          </div>
        </div>
      </div>

      {signin && <SignIn cancelSignin = {toggleSignin} /> }
  
  {partner && <HotelPartnerForm partner = {togglePartner} /> }

    </>
  );
};

export default Navbar;

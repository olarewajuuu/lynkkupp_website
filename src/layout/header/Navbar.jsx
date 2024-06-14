import logoImg from "../../assets/Images/LynkkuppimgNew 1logo.svg";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import SignIn from "../../components/SignIn";


const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClicked = () =>(setClicked(!clicked))

  const [signin, setSignin] = useState(false)

  const toggleSignin = () => {
    setSignin(!signin)
  }


  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <div className="logo">
            <Link to="/"><img src={logoImg} alt="logo" /></Link>
          </div>
          <div className={clicked ? "navItems active": "navItems" }>
            <ul>
                <li><NavLink to="/">Flights</NavLink></li>
                <li><NavLink to="/hotels">Hotels</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/flight+hotel">Flight + Hotel</NavLink></li>
                <li><NavLink to="/flight-status">Flight status</NavLink></li>
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
            <button className= {clicked ? "navButtonPat active": "navButtonPat"}>Partern with us</button>
          </div>
          <div className="icons" onClick={handleClicked}>
          {!clicked? <GiHamburgerMenu /> : <ImCross />}
          </div>
        </div>
      </div>

      {signin && <SignIn /> }
    </>
  );
};

export default Navbar;

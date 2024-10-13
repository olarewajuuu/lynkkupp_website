import "./Approved.css"
import Congrats from "../../assets/Images/Group 288.svg"
import ArrowBack from "../../assets/Images/ep_back.svg"
import StraightLine from "../../assets/Images/Line 36.svg"
import { Link } from "react-router-dom"
const Approved = () => {
  return (
    <div>
      <div className="Headline">
        <div className="Aback"> 
          <img src={ArrowBack} alt="" />
          <Link to="/carddetails">Go back</Link>
        </div>
        <div className="NumberOne">
          <h1>1</h1>
          <p>Search Flight</p>
          <img src={StraightLine} alt="" />
        </div>
        <div className="NumberTwo">
          <h1>2</h1>
          <p>Guest Details</p>
          <img src={StraightLine} alt="" />
        </div>
        <div className="NumberThree">
          <h1>3</h1>
          <p>Summary</p>
          <img src={StraightLine} alt="" />
        </div>
        <div className="NumberFour">
          <h1>4</h1>
          <p>Payment</p>
        </div>

      </div>
      <div className="Congrat"> 
        <div className="Congrat-sign">
          <img src={Congrats} alt="" />
        </div>
        <div className="Payment">
          <h1>Congratulations!</h1>
          <p>Your payment is successful!</p>
          <button>Done</button>
        </div>
      </div>
    </div>
  )
}

export default Approved

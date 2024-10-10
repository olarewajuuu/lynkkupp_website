import "./Approved.css"
import Congrats from "../../assets/Images/Group 288.svg"
const Approved = () => {
  return (
    <div>
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

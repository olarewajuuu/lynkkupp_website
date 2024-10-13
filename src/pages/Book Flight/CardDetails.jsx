import "./CardDetails.css"
import VisaImg from "../../assets/Images/Group 291.svg"
import Jam from "../../assets/Images/jam_messages-f.svg"
import ArrowBack from "../../assets/Images/ep_back.svg"
import StraightLine from "../../assets/Images/Line 36.svg"
import { Link } from "react-router-dom"

const CardDetails = () => {
  return (
    <div>
        <div className="Headline">
            <div className="Aback"> 
                <img src={ArrowBack} alt="" />
                <Link to="/summary">Go back</Link>
            </div>
            <div className="HeadDetails">
                <p>Payment</p>
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
        <div className="CardDetails-Container">
            <div className="container1">
                <div className="Input">
                    <h1>Input your card details</h1>
                </div>
                <div className="Visa">
                    <img src={VisaImg} alt=""  />
                </div>
                <div className="Card-Name">
                    <h1>Name on card</h1>
                    <input type="text" />
                </div>
                <div className="Card-Name">
                    <h1>Card number</h1>
                    <input type="text" />
                </div>
                <div className="Expiry-Date">
                    <div>
                        <h1>Expiry date</h1>
                        <input type="text" placeholder="MM/YY"/>
                    </div>
                    <div>
                        <h1>Cvv</h1>
                        <input type="text" />
                    </div>
                </div>
               <Link to="/approved" className="Buttn">
                    <button>Confirm booking</button>
                </Link>
            </div>

            <div className="container2">
                <div className="cart">
                    <h6>My Cart</h6>
                    <hr />
                </div>
                <div className="flight">
                    <h1>Flight</h1>
                    <p>Lagos (LOS) to Abuja (ABV)</p>
                    <p>Economy: 1 way</p>
                    <hr />
                </div>
                <div >
                    <div className="fare">
                        <h1>Fare Summary</h1>
                        <p>Adult 1</p>
                    </div>
                    <div className="standard">
                        <h1>Standard fare</h1>
                        <p>#123,000.00</p>
                    </div>
                    <div className="discount">
                        <h1>Discount</h1>
                        <p>#0</p>
                    </div>
                    <div className="service">
                        <h1>Service Charge</h1>
                        <p>#0</p>
                    </div>
                    <hr />
                </div>
                <div className="total">
                    <h1>Total Trip Payment</h1>
                    <p>#123,000.00</p>
                </div>
                <div className="Jam">
                    <button><img src={Jam} alt="" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetails

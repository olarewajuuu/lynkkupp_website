import "./Summary.css"
import Arrow from "../../assets/Images/teenyicons_arrow-up-solid.svg"
import Airpeace from "../../assets/Images/Rectangle 136.svg"
import Column from "../../assets/Images/Group 246.svg"
import Jam from "../../assets/Images/jam_messages-f.svg"
import { Link } from "react-router-dom"

const Summary = () => {
  return (
    <div>
        <div className="GeneralDiv">
            <div className="Container1">
                <div className="group1">
                    <div className="Flight">
                        <div>
                            <div className="YourTrip">
                                <h1>Your trip from Lagos</h1>
                                <img src={Arrow} alt="" />
                                <h1>Abuja</h1>
                            </div>
                            <div className="TripDate">
                                <h1>Saturday, Aug 3rd, 2024</h1>
                                <p>0 stops .1hr 15min</p>
                            </div>
                            <div className="Economy">
                                <h1>Economy</h1>
                            </div>
                        </div>
                       <div>
                            <div className="FlightBooking">
                                <p>Booked</p> 
                            </div>
                            <div className="AirP">
                                <img src={Airpeace} alt="" />
                                <p>Air peace</p>
                            </div>
                       </div>
                    </div>
                    <hr />
                    <div className="Time">
                        <div className="TakeoffTime">
                            <h1>17:00</h1>
                            <img src={Column} alt="" />
                            <h1>Lagos . </h1>
                            <p>LOS, Murtala Muhammed International Airport</p>
                        </div>
                        <div className="LandingTime">
                            <h1>18:20</h1>
                            <h2>Abuja . </h2>
                            <p>ABV, Nnamdi Azikwe International Airport</p>
                        </div>
                    </div>
                </div>
                <hr className="line"/>  
                <div className="group2">
                    <div className="GuestD">
                        <h1>Guest Details</h1>
                    </div>
                    <div className="GuestData">
                        <div className="Data">
                            <h1>Name:</h1>
                            <p>Emily Johnson</p>
                        </div>
                        <div className="Data">
                            <h1>Email:</h1>
                            <p>Emily Johnson99@gmail.com</p>
                        </div>
                        <div className="Data">
                            <h1>Contact:</h1>
                            <p>+234 902 245 2345</p>
                        </div>
                        <div className="Data">
                            <h1>Gender:</h1>
                            <p>Female</p>
                        </div>
                        <div className="Data">
                            <h1>Nationality:</h1>
                            <p>Nigeria</p>
                        </div>
                        <div className="Data">
                            <h1>Booking ID:</h1>
                            <p>Lnk-234-324-19</p>
                        </div>
                    </div>
                </div>
                <Link to="/carddetails" className="Button">
                    <button>Proceed to payment</button>
                </Link>
            </div>
            <div className="Container2">
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

export default Summary

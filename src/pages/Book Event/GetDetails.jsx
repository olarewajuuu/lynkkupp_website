import eventsData from "./eventsData"
import { useParams } from "react-router-dom";
import backImg from "/images/back.svg"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Default styles
import { useState } from "react";
import "./GetDetail.css"
import DisplayDetails from "./DisplayDetails";


const GetDetails = ({ quantity, onClose }) => {

    const { eventId } = useParams();
    const event = eventsData.find((event) => event.id === parseInt(eventId));
    const discount = 0.1; // 10% discount
    const serviceCharge = 500; // Flat service charge

    // Calculate total, discount amount, and final amount
    const subtotal = event.price * quantity;
    const discountAmount = subtotal * discount;
    const totalPayment = subtotal - discountAmount + serviceCharge;


    const [userInfo, setUserInfo] = useState(Array(quantity).fill({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        nationality: '',
        gender: '',
        contact: ''
    }));

    const [submittedData, setSubmittedData] = useState(null);

    const handleInputChange = (index, field, value) => {
        const updatedInfo = [...userInfo];
        updatedInfo[index] = { ...updatedInfo[index], [field]: value };
        setUserInfo(updatedInfo);
    };

    const handleContinue = (e) => {
        e.preventDefault();
        setSubmittedData(userInfo); 
        // Perform submission logic here
    };

    return (
        <div className="flex items-start justify-around bg-[#23222213]">
            <div className="p-6 w-full md:w-2/3 mb-10">
                <button onClick={onClose} className=" px-4 py-2 rounded-md my-8  bg-[#55BFEA] text-white md:hidden flex justify-center items-center gap-2"> <img src={backImg} alt="" className="w-[25px]" />Go back</button>
                
                <h1 className="text-[#494949] text-[48px] py-10 font-bold hidden md:block">{event.name}</h1>

                <div className=" ">
                    {/* Generate User Information Forms based on quantity */}
                    {!submittedData ? (
                    <form onSubmit={handleContinue} className=" ">
                        {[...Array(quantity)].map((_, index) => (
                            <div className="space-y-4 mb-6 flex flex-col gap-10 border p-2 md:p-6 bg-white" key={index}>
                                {quantity > 1 &&<h3 className="text-[19px] md:text-[33px] text-[#494949] font-semibold mb-2">Get Details [{index + 1}]</h3>}
                                <div className="border p-2 md:p-6">
                                    <p className="mt-4 md:mt-12 mb-2 text-[#494949] text-[16px]">Title*</p>
                                    <select
                                        value={userInfo[index].title}
                                        onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                                        className="w-4/12 border p-3 rounded-md mb-6" required>
                                        <option value=""></option>
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Miss</option>
                                        <option>Dr.</option>
                                    </select>
                                    <div className="w-full flex gap-4 md:gap-16">
                                        <div className="w-full ">
                                            <label htmlFor="firstName" className="mt-2 mb-2 text-[#494949] text-[16px]" >First Name*</label>
                                            <input
                                                value={userInfo[index].firstName}
                                                onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                                                type="text" placeholder="First Name" className="w-full border p-3 rounded-md mb-6 mt-2" required />
                                        </div>
                                        <div className="w-full ">
                                            <label htmlFor="lastName" className="mt-2 mb-2 text-[#494949] text-[16px]" >Last Name*</label>
                                            <input
                                                value={userInfo[index].lastName}
                                                onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
                                                type="text" placeholder="Last Name" className="w-full border p-3 rounded-md mb-6 mt-2" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mt-2 mb-2 text-[#494949] text-[16px]" >Email*</label>
                                        <input
                                            value={userInfo[index].email}
                                            onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                            type="email" placeholder="Email Address" className="w-full border p-3 rounded-md  mb-6 mt-2" required />
                                    </div>

                                    <div className="w-full flex gap-4 md:gap-16">
                                        <div className="">
                                            <label htmlFor="dateofBirth" className="mt-2 mb-2 text-[#494949] text-[16px]" >Date of Birth*</label>
                                            <input
                                                value={userInfo[index].dateOfBirth}
                                                onChange={(e) => handleInputChange(index, 'dateOfBirth', e.target.value)}
                                                type="date" placeholder="" className="w-full border p-3 rounded-md mb-6 mt-2" required />
                                        </div>
                                        <div className="">
                                            <label htmlFor="nationality" className="mt-2 mb-2 text-[#494949] text-[16px]" >Nationality*</label>
                                            <input
                                                value={userInfo[index].nationality}
                                                onChange={(e) => handleInputChange(index, 'nationality', e.target.value)}
                                                type="text" placeholder="Nationality" className="w-full border p-3 rounded-md mb-6 mt-2" required />
                                        </div>

                                        <div className="hidden md:block">
                                            <label htmlFor="gender" className="mt-2 mb-2 text-[#494949] text-[16px]" >Gender*</label>
                                            <select
                                                value={userInfo[index].gender}
                                                onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                                                className="w-full border p-3 rounded-md mb-6 mt-2" required>
                                                <option value=""></option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="md:hidden">
                                            <label htmlFor="gender" className="mt-2 mb-2 text-[#494949] text-[16px]" >Gender*</label>
                                            <select
                                                value={userInfo[index].gender}
                                                onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                                                className="w-full border p-3 rounded-md mb-6 mt-2" required>
                                                <option value=""></option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className=" flex justify-start items-center">
                                            {/* Phone Input with country flags */}
                                            <PhoneInput
                                                inputClass="w-full border-none focus:outline-none"
                                                containerClass="w-full"
                                                country={"ng"}
                                                value={userInfo[index].contact}
                                                onChange={(value) => handleInputChange(index, 'contact', value)}
                                                containerStyle={{ width: '100%' }}
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>
                                
                            </div>

                        ))}
                        <button type="submit" className="w-full px-4 py-3 bg-[#55BFEA] text-white rounded-md mt-4">Continue</button>
                    </form>
      ) : (
        <DisplayDetails data={submittedData} />
      )}

                </div>



            </div>
            {/* My Cart Summary */}
            <div className="border p-8 mb-6 rounded-md bg-white mt-44 w-2/12 hidden md:block">
                <h3 className="text-[33px] text-[#494949] border-b mb-2">My Cart</h3>
                <p className="text-[19px] text-[#494949] font-semibold my-3">Event</p>
                <p className="text-[13px] text-[#494949] font-semibold flex gap-1 mb-1"><img src={event.dateUrl} alt="" className="w-[16px]" /> {event.name}</p>
                <p className="text-[13px] text-[#494949] pb-3 border-b ">Guest:{quantity}</p>
                <p className="text-[19px] text-[#494949] font-semibold my-4">Fare Summary</p>
                <p className="text-[13px] text-[#494949] ">{quantity}x Ticket</p>
                <p className="text-[13px] text-[#494949] flex items-center justify-between my-2"><span>Standard fare</span> {event.price.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
                {/* <p className="text-[13px] text-[#494949] flex items-center justify-between"><span>Subtotal:</span> {subtotal.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p> */}
                <p className="text-[13px] text-[#494949] flex items-center justify-between"> <span>Discount: </span>{discountAmount.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
                <p className="text-[13px] text-[#494949] flex items-center justify-between my-2 pb-4 border-b"><span>Service Charge:</span>{serviceCharge.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
                <p className="text-[13px] text-[#494949] mt-6 ">Total Ticket Payment</p>
                <p className="text-[28px] text-[#494949] font-bold mt-"> {totalPayment.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
            </div>
        </div>
    );
};

export default GetDetails;

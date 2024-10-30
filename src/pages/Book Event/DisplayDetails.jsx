

const DisplayDetails = ({ data }) => {


    const handleProceedToPayment = () => {
        console.log("Proceeding to payment...");
        // Add further payment handling logic here
    };

    return (
        <div className="shadow-md rounded-lg">
            {/* <h2 className="text-2xl font-semibold mb-4 text-center">User Details Summary</h2> */}

            {data.map((user, index) => (
                <div key={index} >
                    <h3 className="text-[28px] font-semibold mb-6">Guest Details [{index + 1}]</h3>
                    <div className="border-b pb-4 p-2 md:p-6 w-full mb-10 bg-white grid grid-cols-2 md:grid-cols-3 gap-8">
                            <p className="md:pl-4 text-[13px] md:text-[16px]"><strong>Name:</strong> {user.title} {user.firstName} {user.lastName}</p>
                            <p className=" pl-0 md:pl-4 text-[13px] md:text-[16px]"><strong>Email:</strong> {user.email}</p>
                            <p className=" pl-0 md:pl-4 text-[13px] md:text-[16px]"><strong>Contact:</strong> {user.contact}</p>
                            <p className=" pl-0 md:pl-4 text-[13px] md:text-[16px]"><strong>Gender:</strong> {user.gender}</p>
                            <p className=" pl-0 md:pl-4 text-[13px] md:text-[16px]"><strong>Nationality:</strong> {user.nationality}</p>
                            <p className=" pl-0 md:pl-4 text-[13px] md:text-[16px]"><strong>Booking ID:</strong> Lnk-234-324-19</p>
                    </div>
                </div>
            ))}

            {/* Proceed to Payment Button */}
            <button
                onClick={handleProceedToPayment}
                className="w-full px-4 py-3 bg-[#55BFEA] text-white rounded-md mt-4"
            >
                Proceed to Payment
            </button>

            {/* My Cart Summary Section */}
            {/* <div className="border-t pt-4 mt-4">
        <h3 className="text-xl font-semibold mb-2">My Cart Summary</h3>
        <p><strong>Event Name:</strong> Sample Event</p>
        <p><strong>Tickets Selected:</strong> {totalTickets}</p>
        <p><strong>Ticket Price:</strong> ₦{ticketPrice.toLocaleString()}.00</p>
        <p><strong>Discount:</strong> ₦{discount.toLocaleString()}.00</p>
        <p><strong>Service Charge:</strong> ₦{serviceCharge.toLocaleString()}.00</p>
        <p><strong>Total Payment:</strong> ₦{totalPayment.toLocaleString()}.00</p>
      </div> */}
        </div>
    );
};

export default DisplayDetails;

import { useState } from "react";

import UserImg from "../assets/Images/user.svg";
import DropdownImg from "../assets/Images/dropdown.svg";

const RoomDetails = () => {
	const [rooms, setRooms] = useState([{ id: 1, adults: 1, children: 0 }]);
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const addRoom = (e) => {
		e.preventDefault();
		setRooms([...rooms, { id: rooms.length + 1, adults: 1, children: 0 }]);
	};

	const removeRoom = (id) => {
		setRooms(rooms.filter((room) => room.id !== id));
	};

	const updateAdults = (id, increment) => {
		setRooms(
			rooms.map((room) =>
				room.id === id
					? {
							...room,
							adults: Math.max(1, room.adults + (increment ? 1 : -1)),
					  }
					: room
			)
		);
	};

	const updateChildren = (id, increment) => {
		setRooms(
			rooms.map((room) =>
				room.id === id
					? {
							...room,
							children: Math.max(0, room.children + (increment ? 1 : -1)),
					  }
					: room
			)
		);
	};

	// Stop the click event propagation inside the dropdown
	const handleDropdownClick = (e) => {
		e.stopPropagation();
	};

	const handleDone = (event) => {
		event.preventDefault();
		// Reset all room data
		setRooms([{ id: 1, adults: 1, children: 0 }]);
		// Close the dropdown
		setIsOpen(false);
	};

	return (
		<div>
			<div
				onClick={toggleDropdown}
				className="relative border border-gray-300 w-full h-[70px] md:w-[263px] [70px] p-4 rounded-md mr-2 mb-2 md:mb-0"
			>
				<div className="flex flex-row justify-between items-center md:justify-center gap-4">
					<div className="flex gap-2">
						<img src={UserImg} alt="" />
						<div className="flex flex-col">
							<span className="text-[13px] text-[#232222] font-normal">
								Guests and Rooms
							</span>
							<span className="text-[16px] text-[#494949] font-normal">
								1 Guest, 1 room
							</span>
						</div>
					</div>
					<img src={DropdownImg} alt="" />
				</div>
				{isOpen && (
					<div
						onClick={handleDropdownClick}
						className="px-4 py-4 w-[300px] h-[300px] bg-[#fff] flex flex-col items-start overflow-y-auto mt-10 absolute top-20 left-0 z-10"
					>
						{rooms.map((room, index) => (
							<div key={room.id} className="mb-4 w-full">
								<div className="flex justify-between items-center">
									<h2 className="text-lg text-[#232222] text-opacity-35">
										Room {room.id}
									</h2>
									{index > 0 && (
										<button
											onClick={(e) => {
												e.preventDefault();
												removeRoom(room.id);
											}}
											className="text-[#55bfea] text-lg"
										>
											Remove
										</button>
									)}
								</div>
								<div className="mt-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-[#494949] font-medium">
											Adults
										</span>
										<div className="flex items-center space-x-2">
											<button
												className="bg-gray-200 text-[#494949] px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateAdults(room.id, false);
												}}
											>
												-
											</button>
											<span className="text-sm">{room.adults}</span>
											<button
												className=" bg-[#55bfea] bg-opacity-20 text-[#494949] px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateAdults(room.id, true);
												}}
											>
												+
											</button>
										</div>
									</div>
									<p className="text-xs text-[#232222]">{">"} 14 years</p>
								</div>
								<div className="mt-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-[#494949] font-medium">
											Children
										</span>
										<div className="flex items-center space-x-2">
											<button
												className="bg-gray-200  px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateChildren(room.id, false);
												}}
											>
												-
											</button>
											<span className="text-sm text-[#232222]">
												{room.children}
											</span>
											<button
												className=" bg-[#55bfea] bg-opacity-20 px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateChildren(room.id, true);
												}}
											>
												+
											</button>
										</div>
									</div>
									<p className="text-xs text-[#232222]">2-4 years</p>
									<hr className="my-4" />
								</div>
							</div>
						))}
						<div className="flex justify-between w-full">
							<button
								onClick={addRoom}
								className="border-2 border-[#232222] border-opacity-35 text-[#232222] text-opacity-35 py-2 px-4 rounded-md"
							>
								Add room {rooms.length + 1} +
							</button>
							<button
								onClick={handleDone}
								className="bg-[#55bfea] text-white py-2 px-4 rounded"
							>
								Done
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default RoomDetails;

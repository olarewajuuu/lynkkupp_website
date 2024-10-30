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

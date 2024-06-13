
import React, { useState } from "react";

function TherapistForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleBookNowClick = () => {
    setIsFormVisible(true);
  };

  return (
    <>
      <div>
        <h1 className="text-center font-bold font-sans text-3xl mt-7">
          Therapists
        </h1>
        <div className="">
          <div className="container mx-auto flex ml-[6em]">
            <div className="flex flex-wrap justify-between">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="items-center flex flex-col bg-purple-200 shadow-lg rounded-lg m-9 p-4"
                >
                  <img
                    className="border rounded-full w-[80px] mt-4"
                    src="/src/assets/images/male (1).jpeg"
                    alt="Therapist"
                  />
                  <div className="flex flex-col items-start mt-4">
                    <label className="text-lg font-medium">
                      Name: Emmanuel Lumwachi
                    </label>
                    <label className="text-lg font-medium">
                      Email: emmanuellumwachi@gmail.com
                    </label>
                    <label className="text-lg font-medium">
                      Phone Number: 0746572195
                    </label>
                  </div>
                  
                  <div className="mb-7 mt-3">
                    <button
                      className="border rounded-lg hover:bg-[#81007f] p-2"
                      onClick={handleBookNowClick}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-between">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="items-center flex flex-col bg-purple-200 shadow-lg rounded-lg m-9 p-4"
                >
                  <img
                    className="border rounded-full w-[25%] mt-4"
                    src="/src/assets/images/female.jpeg"
                    alt="Therapist"
                  />
                  <div className="flex flex-col items-start mt-4">
                    <label className="text-lg font-medium">
                      Name: Sylvia Midecha
                    </label>
                    <label className="text-lg font-medium">
                      Email: sylviamidecha801@gmail.com
                    </label>
                    <label className="text-lg font-medium">
                      Phone Number: 0746572195
                    </label>
                  </div>
                 
                  <div className="mb-4">
                    <button
                      className="border rounded-lg hover:bg-[#81007f] p-2 mt-3"
                      onClick={handleBookNowClick}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-between">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="items-center flex flex-col  bg-purple-200 shadow-lg rounded-lg m-9 p-4"
                >
                  <img
                    className="border rounded-full w-[80px] mt-4"
                    src="/src/assets/images/images (1).png"
                    alt="Therapist"
                  />
                  <div className="flex flex-col items-start mt-4">
                    <label className="text-lg font-medium">
                      Name: Zulfa Ramadhan
                    </label>
                    <label className="text-lg font-medium">
                      Email: zulfaramadhan@gmail.com
                    </label>
                    <label className="text-lg font-medium">
                      Phone Number: 0746572195
                    </label>
                  </div>
                 
                  <div className="mb-4">
                    <button
                      className="border rounded-lg hover:bg-[#81007f] p-2 mt-3"
                      onClick={handleBookNowClick}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 pr-20 pl- rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Book a Session</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="Your Location"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <div className="flex">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-1"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-1"
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Sickness</label>
                <textarea
                  className="w-full border rounded-lg p-2"
                  placeholder="Describe your sickness"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="border rounded-lg bg-gray-500 text-white p-2 mr-4"
                  onClick={() => setIsFormVisible(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border rounded-lg bg-[#81007f] text-white p-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default TherapistForm


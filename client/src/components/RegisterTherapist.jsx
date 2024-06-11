import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import purple from "../assets/purple.jpeg";
import { useState } from "react";

function RegisterTherapist() {
  const [showpassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <>
      <div>
        <div>
         

          <div className="container mx-auto mt-[5em] border rounded-2xl w-[40%] h-[70vh] shadow-md ">
            <h1 className="font-bold text-4xl text-center mt-[1em] mb-[1em]">
              Register As A Therapist
            </h1>
            <form className="flex flex-col  items-center">
              <input
                className="border shadow-md mb-5 p-4 outline-none px-[4.6em] rounded-2xl"
                type="text"
                placeholder="FirstName"
              />
              <input
                className="border mb-5 shadow-md p-4 outline-none px-[4.6em] rounded-2xl"
                type="text"
                placeholder="LastName"
              />
              <input
                className="border mb-5 shadow-md p-4 outline-none px-[4.6em] rounded-2xl"
                type="email"
                placeholder="Email"
              />
              <div className="flex border shadow-md mb-5 p-4 outline-none px-[4.4em] rounded-2xl items-center ">
                <input
                  className="outline-none"
                  type={showpassword ? "password" : "text"}
                  placeholder="Password"
                />
                <div className="text-purple-700" onClick={handleShowPassword}>
                  {showpassword ? <IoEyeSharp /> : <FaEyeSlash />}
                </div>
              </div>
              <div className="flex border shadow-md mb-5 p-4 outline-none px-[4.7em] rounded-2xl">
                <input
                  className="outline-none"
                  type={showpassword ? "password" : "text"}
                  placeholder="Confirm Password"
                />
              </div>

              <div>
                <button className="border rounded-2xl p-4 px-[4em] text-xl mt-[3em] cursor-pointer bg-[#81007F] text-white">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterTherapist;

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [errorMessege, setErrorMessage] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSignin = (e) => {
    e.preventDefault();

    if (formdata.email === "") {
      setErrorMessage("Kindly fill in the email address");
    } else if (formdata.password === "") {
      setErrorMessage("Kindly fill in the password");
    } else {
      setErrorMessage("");
      console.log(formdata);
      const url="http://127.0.0.1:8000/api/userlogin/"
      const options={
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formdata),
      }
    }
  };
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <>
      <div className="">
        <div className="container mx-auto mt-[5em] border rounded-2xl w-[40%] h-[50vh] shadow-md ">
          <h1 className="font-bold text-4xl text-center mt-[1em] mb-[1em]">
            LogIn As A Patient
          </h1>
          <form className="flex flex-col  items-center">
            <input
              className="border mb-5 shadow-md p-4 outline-none px-[4.5em] rounded-2xl"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <div className="flex border shadow-md mb-5 p-4 outline-none px-[4em] rounded-2xl items-center ">
              <input
                className="outline-none"
                type={showpassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <div className="text-purple-700" onClick={handleShowPassword}>
                {showpassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </div>
            </div>
            <p className="text-red-500 text-xl text-center">{errorMessege}</p>
            <div>
              <button
                onClick={handleSignin}
                className="border p-4 px-[4em] text-xl mt-[3em] rounded-2xl cursor-pointer bg-[#81007F] text-white"
              >
                Log In
              </button>
            </div>
            <div className="text-xl mt-[2em]">
              <p>
                Don't Have An Account?
                <Link to="/signup"><span className="text-[#81007F] underline cursor-pointer">
                  Sign Up
                </span></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;

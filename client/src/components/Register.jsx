import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showpassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  const [errorMessege, setErrorMessage] = useState("");
  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (formdata.firstname === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else if (formdata.lastname === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else if (formdata.email === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else if (formdata.password === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else {
      setErrorMessage("");
      console.log(formdata);

      const url = "http://127.0.0.1:8000/api/userregistration/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      };
      fetch(url, options).then((res) => {
        console.log(res);
        if (!res.ok) {
          return res.json().then((message) => {
            setErrorMessage(message["email"][0]);
          });
        }
        return res.json();
      })
      .then((data)=>{
        if(data!==undefined){
          console.log(data)
          navigate("/signin")
        }
      })
      .catch((err)=>console.log(err))
    }
  };

  return (
    <div className="flex">
      <div className="container mx-auto mt-[5em] border rounded-2xl w-[40%] h-[80vh] shadow-md ">
        <h1 className="font-bold text-4xl text-center mt-[1em] mb-[1em]">
          Register As A Patient
        </h1>
        <form className="flex flex-col  items-center">
          <input
            className="border shadow-md mb-5 p-4 outline-none px-[4em] rounded-2xl"
            type="text"
            placeholder="FirstName"
            name="firstname"
            onChange={handlechange}
          />
          <input
            className="border mb-5 shadow-md p-4 outline-none px-[4em] rounded-2xl"
            type="text"
            placeholder="LastName"
            name="lastname"
            onChange={handlechange}
          />
          <input
            className="border mb-5 shadow-md p-4 outline-none px-[4em] rounded-2xl"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handlechange}
          />
          <div className="flex border shadow-md mb-5 p-4 outline-none px-[4em] rounded-2xl items-center ">
            <input
              className="outline-none"
              type={showpassword ? "password" : "text"}
              placeholder="Password"
              name="password"
              onChange={handlechange}
            />
            <div className="text-purple-700" onClick={handleShowPassword}>
              {showpassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="flex border shadow-md mb-5 p-4 outline-none px-[4em] rounded-2xl">
            <input
              className="outline-none"
              type={showpassword ? "password" : "text"}
              placeholder="Confirm Password"
              name="confirmpassword"
              onChange={handlechange}
            />
          </div>
          <p className="text-red-500 text-center text-xl">{errorMessege}</p>
          <div className="flex items-center gap-8 mt-8 text-xl">
            <input type="checkbox" />
            <p>I Agree to All the Terms and conditions</p>
          </div>

          <div>
            <button
              onClick={handleSignUp}
              className="border rounded-2xl p-4 px-[4em] text-xl mt-[3em] cursor-pointer bg-[#81007F] text-white"
            >
              Create Account
            </button>
          </div>
          <div className="text-xl mt-[2em]">
            <p>
              Already Have An Account?
              <Link to="/signin">
                <span className="text-[#81007F] underline cursor-pointer">
                  LogIn
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

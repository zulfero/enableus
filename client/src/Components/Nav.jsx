import logo from "../assets/images/logo.png"

function Nav(){
    return(
        <div className="flex bg-[#81007f] mb-10 justify-between">
            <div>
        <img className="size-[100px] " src={logo}/>
        </div>
        <div className="flex mt-[20px] items-center   gap-4">
            <button className="border px-8 py-2 rounded-lg bg-white">login</button>
            <button  className="border px-6 py-2 rounded-lg bg-white">signup</button>
            <button  className="border px-7 py-2 rounded-lg bg-white">Therapist</button>
        </div>
        </div>
    )
}
export default Nav
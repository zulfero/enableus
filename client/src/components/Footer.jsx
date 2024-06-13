import logo from "../assets/images/logo.png"
function Footer (){
    return(
        <div className="flex gap-[200px] bg-[#81007f] mt-10">
            <div>
        <img className="size-[200px]" src={logo}/>
        </div>
    <div>
                <h2 className=" text-white mt-6 text-2xl">Follow us</h2>
                <div className="flex w-full max-w-12 gap-3  mt-4">
                   
                    <img className="size-8" src="/src/assets/images/facebook.png "/>
                
                    <img className="size-8" src="/src/assets/images/instagram.png"/>
                    <img className="size-8" src="/src/assets/images/twitter.png"/>
                </div>
                </div>
                <div>
                    <h2 className="text-white text-1xl mt-6"> Quick Links</h2>
                </div>
        </div>
    )
}
export default Footer
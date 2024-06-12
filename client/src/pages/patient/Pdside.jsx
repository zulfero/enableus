import { Link } from "react-router-dom"

function Pdside(){
    return(<>
        <div className="bg-[#81007f] h-[100vh] w-[30vw]">

    <div className="gap-10 flex flex-col ml-7 mt-5">
    <div className="flex items-center gap-3">

    <Link to="/dashboard/profile">
    <img src="/src/assets/images/id-card-icon.png" alt="" width={30} />

      <p>My profile</p>
      </Link>
      </div>
      <div className="flex items-center gap-3">
      <Link to="/dashboard/appointments">
      <img src="/src/assets/images/reservation-completed-icon.png" alt="" width={30} />

      <p>Appointments</p>
      </Link>
      </div>
      <div className="flex items-center gap-3">
      <Link to="/dashboard/email">
      <img src="/src/assets/images/email-envelop-open-icon.png" alt="" width={30} />

      <p>Email</p>
      </Link>
      </div>
      <div className="flex items-center gap-3">
      <Link to="/dashboard/payment">
      <img src="/src/assets/images/credit-card-icon.png" alt="" width={30} />

      <p>Payment History</p>
      </Link>
      </div>
      
         
    </div>
    </div>
    </>)
}
export default Pdside
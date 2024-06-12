import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-[#81007f] h-[100vh] w-[30vw]">
      <div className="gap-10 flex flex-col ml-7 mt-5">
        <div className="flex items-center gap-3">
          <img src="/src/assets/images/id-card-icon.png" alt="" width={30} />

          <Link to="/dashboardt/Therapistprofile">
            <p>My profile</p>
          </Link>
        </div>
<div className="flex items-center gap-3">  
        <Link to="/dashboardt/scheduledappointments">
        <img src="/src/assets/images/reservation-completed-icon.png" alt="" width={30} />

          <p>ScheduledAppointments</p>
        </Link>
        </div>
<div className="flex items-center gap-3">
        <Link to="/dashboardt/newemails">
        <div className="flex">
        <img src="/src/assets/images/email-envelop-open-icon.png" alt="" width={30} />

          <p>Emails</p>
          </div>
        </Link>
        </div>
        <div className="flex items-center gap-3">
        <Link to="/dashboardt/paymentt">
        <img src="/src/assets/images/credit-card-icon.png" alt="" width={30} />

          <p>Payment</p>
        </Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

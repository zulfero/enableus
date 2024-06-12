

import React from "react";

function Pdashboard() {
  return (
    <div className="dashboard-container ">
      <div className="flex justify-between ">
        <div className="flex gap-10  bg-[#81007f] w-[400px] h-[700px]  flex-col">
          <button className="mt-10 rounded-lg bg-white">My Profile</button>
          <button className="mt-10 rounded-lg hover:bg-white">
            Appointments
          </button>
          <button className="mt-10 rounded-lg hover:bg-white">
            email
          </button>
          <button className="mt-10 rounded-lg hover:bg-white">
            Payment History
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pdashboard;

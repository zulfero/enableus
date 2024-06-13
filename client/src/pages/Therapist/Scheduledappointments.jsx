import Dashboardt from "./Dashboardt";

function ScheduledAppointments() {
  return (
    <Dashboardt>
      <div className=" text-center mt-10">
      <p className="font-bold font-sans ">Scheduled appointments</p>
      <div className="bg-white">
      <ol className=" text-center mt-5 text-2xl ">
        
            <li>Appointment 1 - Date: June 15, 2024 - Patient:Smith</li>
            <li>
              Appointment 2 - Date: June 20, 2024 - Patient:Johnson
            </li>
            <li>
              Appointment 3 - Date: June 25, 2024 - Patient:Williams
            </li>
          </ol>
          </div>
      </div>
    </Dashboardt>
  );
}
export default ScheduledAppointments;

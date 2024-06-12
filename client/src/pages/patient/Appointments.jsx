import Dashboard from "./Dashboard";

function Appointments() {
  return (
    <Dashboard>
      <div className=" container mx-auto">
        <div className="appointments-section ">
          <h2 className=" text-center font-bold text-white text-2xl mt-3">
            Appointments
          </h2>
          <ul className=" text-center mt-5 bg-white text-2xl ">
            <li>Appointment 1 - Date: June 15, 2024 - Therapist: Dr. Smith</li>
            <li>
              Appointment 2 - Date: June 20, 2024 - Therapist: Dr. Johnson
            </li>
            <li>
              Appointment 3 - Date: June 25, 2024 - Therapist: Dr. Williams
            </li>
          </ul>
        </div>
      </div>
    </Dashboard>
  );
}
export default Appointments;

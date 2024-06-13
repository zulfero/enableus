import Dashboard from "./Dashboard";

function PatientProfile() {
  return (
    <div className="">
      <Dashboard>
       
        <div className=" flex  flex-col ml-[400px] mt-10 rounded-full items-center w-[400px] h-[400px]">
        <h1 className=" text-center mb-4 font-sans font-bold text-2xl mt-6">
          My profile
        </h1>
          <img className="size-[150px]" src="/src/assets/images/female.jpeg" />
          <label className="text-2xl">name:</label>
          <h1 className="bg-white rounded-lg p-2">sylvia Midecha</h1>

          <label className="text-2xl">Email:</label>
          <h1 className="bg-white rounded-lg p-2">sylviamidecha801@gmail.com</h1>

          <label className="text-2xl">PhoneNumber:</label>
          <h1 className="bg-white rounded-lg p-2">0796323224</h1>

          <div className="flex mt-10 gap-10">
            <button className="border p-2 rounded-lg">Edit</button>
            <button className="border p-2 rounded-lg">Delete</button>

          </div>
        </div>
      </Dashboard>
    </div>
  );
}
export default PatientProfile;

import Dashboardt from "./Dashboardt";

function TherapistProfile() {
  return (
    <>
      <Dashboardt>
        
        <div className=" flex  flex-col ml-[400px] mt-10 rounded-full items-center w-[400px] h-[400px]">
        <h1 className=" text-center font-sans font-bold text-2xl mt-6">
          My profile
        </h1>
          <img
            className="size-[150px]"
            src="/src/assets/images/male (1).jpeg"
          />
          <label className="text-2xl">name:</label>
         <h1 className="bg-white rounded-lg p-2">Emmanuel Lumwachi</h1>
          <label className="text-2xl">Email:</label>
         <h1 className="bg-white rounded-lg p-2">emmanuellumwachi@gmail.com</h1>
          <label className="text-2xl">PhoneNumber:</label>
         <h1 className="bg-white rounded-lg p-2">0796323224</h1>
          <div className="flex gap-4 mt-4">
          <button className="border p-2 bg-hover:white">Edit</button>
          <button className="border p-2 bg-hover:white">Delete</button>
          </div>
        </div>
      </Dashboardt>
    </>
  );
}
export default TherapistProfile;

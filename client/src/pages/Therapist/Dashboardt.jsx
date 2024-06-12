import Sidebar from "./Sidebar";

function Dashboardt({ children }) {
  return (
    <div className="flex">
      <div className=" min-h-screen w-[20vw] bg-[#81007F]">
        <Sidebar />
      </div>
      <div className="min-h-screen bg-purple-500 w-[80vw]">{children}</div>
    </div>
  );
}
export default Dashboardt;

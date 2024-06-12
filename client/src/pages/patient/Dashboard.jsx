import Pdashboard from "./ Pdashboard";
import Pdside from "./Pdside";

function Dashboard({ children }) {
  return (
    <>
      <div className="flex">
        <div className=" min-h-screen w-[20vw] bg-[#81007F]">
          <Pdside />
        </div>
        <div className="min-h-screen bg-purple-500 w-[80vw]">{children}</div>
      </div>
    </>
  );
}
export default Dashboard;

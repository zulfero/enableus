import Dashboard from "./Dashboard";

function Email() {
  return( <Dashboard>
<div className="mt-4">
  <ul className="flex gap-[100px] justify-around">
    <li className="bg-white">Unread messages</li>
    <li>Sent messages</li>
    <li>Drafts</li>
    <li>starred</li>
  </ul>
  <div className="bg-white h-[400px] mt-4">
    <div className="border">
      <h1>Dr.Nestopalmer@gmail.co....</h1>
    </div>
    <div className="border">
    <h1>Dr.maddawg@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>Dr.agent47@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>Dr.badass@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>Dr.zooyork@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>Dr.fiftyfive@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>Dr.arafat@gmail.co...</h1>

    </div>
  </div>
  </div>


  </Dashboard>)
}
export default Email
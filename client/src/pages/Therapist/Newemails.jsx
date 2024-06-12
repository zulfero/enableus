import Dashboardt from "./Dashboardt";

function Newemails() {
  return( <Dashboardt>
<div className="mt-4">
  <ul className="flex gap-[100px] justify-around">
    <li className="bg-white">Unread messages</li>
    <li>Sent messages</li>
    <li>Drafts</li>
    <li>starred</li>
  </ul>
  <div className="bg-white h-[400px] mt-4">
    <div className="border">
      <h1>Nestopalmer@gmail.co....</h1>
    </div>
    <div className="border">
    <h1>maddawg@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>agent47@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>badass@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>zooyork@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>fiftyfive@gmail.co...</h1>

    </div>
    <div className="border">
    <h1>arafat@gmail.co...</h1>

    </div>
  </div>
  </div>


  </Dashboardt>)
}
export default Newemails;

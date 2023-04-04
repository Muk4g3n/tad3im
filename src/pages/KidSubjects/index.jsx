import Shadow from "../../Images/Shadow.png";
import Arabic from "../../Images/arabic.png";
import Logo from "../../Images/Logo.svg";
import House from "../../Images/House.png";
// import Chat from "../../Images/Chat.svg";

import './kidsubjects.css'

function KidSubjects() {
    return ( 
        
      <div className="main-content">
        <div className="board-holder">
          <div className="board">
              <img src={Arabic} alt="games" />
              <img src={Arabic} alt="games" />
              <img src={Arabic} alt="games" />
              <img src={Arabic} alt="games" />
              <img src={Arabic} alt="games" />
              <img src={Arabic} alt="games" />
          </div>
          <div className="shadow">
            <img src={Shadow} alt="shadow" />
          </div>
        </div>

        <div className="logo-holder">
          <img src={Logo} alt="logo" id="logo" />
          {/* <div className="chat-holder">
            <img src={Chat} alt="chat" />
            <div className="text">مرحبا سمير بماذا نبدأ اليوم</div>
          </div> */}
          <div className="house-bg">
          <img src={House} alt="bigperson" className="big-person" />
          </div>
        </div>
      </div>
  

     );
}

export default KidSubjects;
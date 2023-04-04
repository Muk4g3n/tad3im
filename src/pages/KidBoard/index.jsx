import Shadow from "../../Images/Shadow.png";
import Games from "../../Images/Games.png";
import Tests from "../../Images/Tests.png";
import Lessons from "../../Images/Lessons.png";
import Exams from "../../Images/Exams.png";
import Logo from "../../Images/Logo.svg";
import BigPerson from "../../Images/BigPerson.png";
import Chat from "../../Images/Chat.svg";
import "./kidboard.css";

function KidBoard() {
  return (
    
      <div className="main-content">
        <div className="board-holder">
          <div className="board">
           
              <img src={Games} alt="games" />
              <img src={Tests} alt="tests" />
            
              <img src={Lessons} alt="lessons" />
              <img src={Exams} alt="exams" />
            
          </div>
          <div className="shadow">
            <img src={Shadow} alt="shadow" />
          </div>
        </div>

        <div className="logo-holder">
          <img src={Logo} alt="logo" id="logo" />
          <div className="chat-holder">
            <img src={Chat} alt="chat" />
            <div className="text">مرحبا سمير بماذا نبدأ اليوم</div>
          </div>
          <img src={BigPerson} alt="bigperson" className="big-person" />
        </div>
      </div>
    
  );
}

export default KidBoard;

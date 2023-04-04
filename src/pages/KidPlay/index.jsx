import Logo from "../../Images/Logo.svg";
import House from "../../Images/House.png";
import Person1 from "../../Images/Person1.png";
import Wobbly2 from "../../Images/wobbly2.svg";

import "./kidplay.css";

function KidPlay() {
  return (
      <div className="main-content">
        <div className="top-content">
          <img src={Logo} alt="logo" />
          <div className="house-bg">
            <img src={House} alt="bigperson" className="big-person" />
          </div>
          <div className="text">ترفيه</div>
        </div>

        <div className="content">
          <div className="holder">
            <img src={Person1} alt="person1" className="person" />
            <img src={Wobbly2} alt="wobbly" className="wobbly" />
            <div className="wobbly-holder">أناشيد</div>
          </div>
          <div className="holder" id="two">
            <img src={Person1} alt="person1" className="person" />
            <img src={Wobbly2} alt="wobbly" className="wobbly" />
            <div className="wobbly-holder">قصص الأنبياء</div>
          </div>
          <div className="holder">
            <img src={Person1} alt="person1" className="person" />
            <img src={Wobbly2} alt="wobbly" className="wobbly" />
            <div className="wobbly-holder">ألعاب</div>
          </div>
        </div>
      </div>
  );
}

export default KidPlay;

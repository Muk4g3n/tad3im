import Shadow from "../../Images/Shadow.png";
import LeftArrow from "../../Images/LeftArrow.svg";
import Logo from "../../Images/Logo.svg";
import House from "../../Images/House.png";

import './kidplayer.css'

function KidPlayer() {
    return ( 
    <div className="main-content">
        <div className="top-content"> 
            <div className="left-side">
                <div className="house-bg">
                    <img src={House} alt="bigperson" className="house" />
                </div>

                <div className="arrow">
                        <img src={LeftArrow} alt="left arrow" />
                </div>

            </div>

            
            <div className="right-side">
            <img src={Logo} alt="Logo" />
            </div>
         </div>

         <div className="bottom-content">
            <div className="main-player">
                <div className="board">

                </div>
                <img src={Shadow} alt="shadow" />
            </div>

            <div className="side-player">
                <div className="little-board">hello</div>
                <div className="little-board">hello</div>
                <div className="little-board">hello</div>

            </div>

         </div>

    </div>
   );
}

export default KidPlayer;
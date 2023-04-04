import PieCircle from "components/PieCircle";
import Sphere from "../../Images/Sphere.svg";
import Donut from "../../Images/Donut.svg";
import Exams from "../../Images/Exams.png";
import Lessons from "../../Images/Lessons.png";
import Games from "../../Images/Games.png";
import Tests from "../../Images/Tests.png";
import RedIcosphere from "../../Images/Redicosphere.svg";
import Arrow from "../../Images/arrow.png";
import Cat from "../../Images/Cat.jpg";
import "./lesson.css";
import { Link } from "react-router-dom";

function SubjectOverview() {
  return (
    
      <div className="overview-board-content">
        <div className="top-board-content">
          <div className="background-images">
            <img src={Sphere} alt="sphere" />
            <img src={Donut} alt="sphere" />
          </div>

          <div className="content-header">
            <div className="text">
              <span>solved</span>
              <br /> 13 exercices
            </div>
            <div className="text">
              <span>Today</span>
              <br /> 02 exercices
            </div>
          </div>

          <div className="top-progress">
            <PieCircle percentage={50} />
          </div>
        </div>

        <div className="bottom-board-content">
          <div className="top-main">
            <Link to="/parent/subjects" className="return-btn">
              {" "}
              <img src={Arrow} alt="arrow" /> <p> Back to all Subjects</p>
            </Link>
            <div className="card-overview">
              <div className="card">
                <img src={Cat} alt="" className="lesson" />
                <div className="gray"></div>
              </div>
              <p className='module-title' >French</p>
              <div className="loading-bar">
                    <p className='loading-level' >60%</p>
                    <div className="fullbar" /*style={{width:width,height:20}}*/ ></div>
                    <div className="bar" style={{ width:`${60}%`,background:'red' } } ></div>
                </div>

            </div>
            <div className="circle"></div>
          </div>

          <div className="study-types">
            <img src={Games} alt="games" className="type" />
                    <img src={Exams} alt="exams" className="type" />
                    <img src={Tests} alt="tests" className="type" />
                    <img src={Lessons} alt="lessons" className="type" />
          </div>
        </div>
        <img id="red-ico" src={RedIcosphere} alt="red" />
      </div>
    
  );
}

export default SubjectOverview;

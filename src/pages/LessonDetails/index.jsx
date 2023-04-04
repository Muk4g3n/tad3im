import PieCircle from "components/PieCircle";
import Sphere from "../../Images/Sphere.svg";
import Donut from "../../Images/Donut.svg";
import RedIcosphere from "../../Images/Redicosphere.svg";
import Arrow from "../../Images/arrow.png";
import Cat from "../../Images/Cat.jpg";
import Exams from "../../Images/Exams.png";
import Lessons from "../../Images/Lessons.png";
import Games from "../../Images/Games.png";
import Tests from "../../Images/Tests.png";

import "./lessondetails.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LessonDetails() {
  const [activeTrimestre, SetActiveTrimestre] = useState(0);

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
          <Link to="/parent/subject-overview" className="return-btn">
            {" "}
            <img src={Arrow} alt="arrow" /> <p> Back to subject</p>
          </Link>
          <div className="card-overview">
            <div className="card">
              <img src={Cat} alt="" className="lesson" />
              {/* <button className="see-more">See more</button> */}
              <div className="gray"></div>
            </div>
            <p className="module-title">French</p>
            <div className="loading-bar">
              <p className="loading-level">60%</p>
              <div
                className="fullbar"
              ></div>
              <div
                className="bar"
                style={{ width: `${60}%`, background: "red" }}
              ></div>
            </div>
          </div>
          <div className="circle"></div>
        </div>

        <div className="subject-details">
          <div className="types">
            <img src={Lessons} alt="lessons" className="active" />
            <div className="not-active">
              <img src={Games} alt="games" className="type" />
              <img src={Exams} alt="exams" className="type" />
              <img src={Tests} alt="tests" className="type" />
            </div>
          </div>

          <div className="subject">
            <div className="trimestres">
              <div
                className={`trimestre ${activeTrimestre === 0 ? "active" : ""}`}
                onClick={() => SetActiveTrimestre(0)}
              >
                1st Trimester
              </div>
              <div
                className={`trimestre ${activeTrimestre === 1 ? "active" : ""}`}
                onClick={() => SetActiveTrimestre(1)}
              >
                2nd Trimester
              </div>
              <div
                className={`trimestre ${activeTrimestre === 2 ? "active" : ""}`}
                onClick={() => SetActiveTrimestre(2)}
              >
                3rd Trimester
              </div>
            </div>

            <div className="lessons">
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              <div className="lesson">Lesson 1</div>
              

            </div>
          </div>
        </div>
      </div>
      <img id="red-ico" src={RedIcosphere} alt="red" />
    </div>
  );
}

export default LessonDetails;

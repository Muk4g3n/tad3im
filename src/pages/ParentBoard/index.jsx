
import LearningProgress from "components/LearningProgress";
import Stats from "components/Stats";
import "./board.css"
import ProgressTracker from "components/ProgressTracker";
import { Outlet } from "react-router-dom";

function ParentBoard() {
    return ( <>
            <Outlet/>
            <div className="board-content">
                <div className="top-board-content">
                    <LearningProgress/>
                    <Stats/>    
                </div>
                <div className="bottom-board"><ProgressTracker/></div>
            </div>
            </>
     );
}

export default ParentBoard;
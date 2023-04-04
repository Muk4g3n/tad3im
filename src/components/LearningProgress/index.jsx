import Snapshot from '../../Images/calendarSnapshot.png'
import Icosphere from '../../Images/ProgIco.svg'
import { Link } from 'react-router-dom'
import './learn.css'

function LearningProgress() {
    return ( <div className="learn-card">
        <div className="top_card">
            <h3>Progress</h3>
            <img src={Icosphere} alt="ico" />
            
            <Link to="/parent/calendar" className="new-progress" >Start a new Progress</Link>
        </div>

        <div className="bottom_card">

            <div className="content">
                
                <img src={Snapshot} alt="snapshot" />

            </div> 
        </div>
    </div> );
}

export default LearningProgress;
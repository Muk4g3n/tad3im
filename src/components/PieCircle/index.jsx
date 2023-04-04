import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './piecircle.css'

function PieCircle({percentage}) {
    return ( 
    
    
        <div className="progress">
        <div className="pie-holder">
        <div className="pie">
        <CircularProgressbar
            styles={buildStyles({
                pathColor: '#F5E306',
                // trailColor:'#C0CDF2',
            })}
        value={percentage} text={`${percentage}%`} />
        </div>
    </div>

        <div className="detail-text">
            <p>Goal progress</p>
            <p>Daily records</p>
        </div>
        </div>
    
    
     );
}

export default PieCircle;
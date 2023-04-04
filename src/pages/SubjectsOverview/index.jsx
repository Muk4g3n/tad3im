import PieCircle from 'components/PieCircle';
import Sphere from '../../Images/Sphere.svg'
import Donut from '../../Images/Donut.svg'
import Card from 'components/Card';

import'./subjectoverview.css'

function SubjectsOverview() {


    const temp = 
        ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]

    



    return ( 
        <div className="overview-board-content">
            <div className="top-board-content">
                    <div className="background-images">
                            <img src={Sphere} alt="sphere" />
                            <img src={Donut} alt="sphere" />
                    </div>

                    <div className="content-header">
                        <div className='text' ><span>solved</span><br /> 13 exercices</div>
                        <div className='text' ><span>Today</span><br /> 02 exercices</div>
                    </div>

                    <div className="top-progress">
                        <PieCircle percentage={50} />
                    </div>
            </div>

            <div className="lesson-grid">
                {
                    
                    temp.map(e=>{

                            return <Card/>

                         
                    })

                    
                }


                

            </div>        
        </div>
     );
}

export default SubjectsOverview;
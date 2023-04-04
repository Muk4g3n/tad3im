import Card from 'components/Card';
import Donut from '../../Images/Donut.svg'
import Sphere from '../../Images/Sphere.svg'
import PieCircle from 'components/PieCircle';
import { motion } from 'framer-motion';
import './tracker.css'
import { useRef, useState, useEffect } from 'react';
function ProgressTracker() {

    let modules = [
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
    ]

    const [width,setWidth] = useState(0)
    const [percentage, setPercentage] = useState(66)

    const carouselRef = useRef(null)


    useEffect(()=>{
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[])

    return ( <div className="progressitracker_card"> 
        <img className='bg-img' src={Donut} alt="donut" />
        <img className='bg-img1' src={Sphere} alt="ball" />
        <div className="goaltracker">
            <div className="exotracker">
                <div>
                    <p>Solved</p>
                    <h4>13 Exercices</h4>
                </div>
                <div>
                    <p>Today</p>
                    <h4>02 Exercices</h4>
                </div>
            </div>
            {/**
                 * 
                 * todo: get the percentage in the state
                 *     
                 */}
            <PieCircle percentage={percentage} />

           
        </div>
        
        <motion.div ref={carouselRef} className="detailtracker">

            <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner'>
               {/**
                 * 
                 * todo: get the list of subjects for the kid and pass it as props
                 *     
                 */} 
              {modules.map((e,i)=>{
                return <Card key={i}/>
              })} 
            </motion.div>
             

                
                

        </motion.div>
    </div> );
}

export default ProgressTracker;
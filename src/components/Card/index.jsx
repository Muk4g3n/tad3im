import Cat from '../../Images/Cat.jpg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './card.css'
function Card() {

    // let width = 20

    return ( <motion.div className="card-holder">
            <div className="module">
                {/**
                 * 
                 * todo: change the title,loading-level to source to the subject title
                 *     
                 */}
                <p className='module-title' >French</p>
                <div className="loading-bar">
                    <p className='loading-level' >60%</p>
                    <div className="fullbar" /*style={{width:width,height:20}}*/ ></div>
                    <div className="bar" style={{ width:`${60}%`,background:'red' } } ></div>
                </div>
            </div>
            <div className="card">
                {/**
                 * 
                 * todo: change the image to source to the subject image
                 *     
                 */}
                <img src={Cat} alt="img" className="lesson" />
                <Link to="/parent/subject-overview" className='see-more' >See more</Link>
                <div className="gray"></div>
            </div>
    </motion.div> );
}

export default Card;
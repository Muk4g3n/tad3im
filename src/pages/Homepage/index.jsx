import Homepagebg from '../../Images/Homepagebg.png'
import Person from '../../Images/Person.png'
import Lines from '../../Images/Lines.svg'
import Icosphere from '../../Images/icosphere.svg'
import Cone from '../../Images/Cone.svg'
import Logo from '../../Images/Logo.svg'
import './homepage.css'
import { Link } from 'react-router-dom'

function Login() {
    

    


    return ( 
        <div className="container">
            <img id='bg_image' src={Homepagebg} alt="bg" />
            <img id='bg_person' src={Person} alt="bg" />
            <img id='bg_line' src={Lines} alt="bg" />
            <img id='bg_cone' src={Cone} alt="bg" />
            <img id='bg_icosphere' src={Icosphere} alt="bg" />

            <div className="page_content">
            <img id='Logo' src={Logo} alt="bg" />
            <h1>This is the future of Education</h1>
            <div className="buttons">
               <Link to="/login" className='link join'> Join now</Link>
                {/* <Link className='link' > <span>Watch How it works</span> </Link> */}
            </div>
            </div>



        </div>



     );
}

export default Login;
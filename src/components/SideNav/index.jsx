import Logo from '../../Images/Logo.svg'
import Cat from '../../Images/Cat.jpg'
import Billing from '../../Images/Billing.svg'
import Settings from '../../Images/Settings.svg'
import './nav.css'
import { Link } from 'react-router-dom'

function SideNav() {

    

    return ( 
            
            <div className="nav-holder">
             <Link to="/parent/board" >   
            <img id='nav-logo' src={Logo} alt="logo" />
            </Link>
            <div className="profiles">
                <div className="parent-profile">
                    <div className="img-holder">
                    <img className='parent'  src={Cat} alt="hello" />
                    </div>
                    <p className='parent-name' >Salima Ait Merzak</p>
                </div>

                <div className="kid-profiles">
                        <div className="kid-img-holder">
                            {/**
                             * 
                             * todo: get the kid image
                             *     
                             */}    
                            <img className='kid'  src={Cat} alt="hello" />
                        </div>
                    <div className="current-child">
                        <div className="kid-img-holder">
                            <img className='kid' src={Cat} alt="hello1" />
                        </div>
                    </div>
                </div>
            </div>

            

            <Link to={"/billing"} className="billing">
                <img src={Billing} alt="billing" />
                <p>Billing</p>
            </Link>

            <div className="settings">
                <img src={Settings} alt="settings" />
                <p>Settings</p>
            </div>



            <button id='logout-btn' >log-out</button>
            </div>

   );
}

export default SideNav;
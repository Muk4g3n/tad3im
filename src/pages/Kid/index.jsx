import { Outlet } from "react-router-dom";
import './kid.css'
function Kid() {
    return ( 
        <div className="main-holder">
        <div className="yellow-bg"></div>
        <div className="blue-bg"></div>
                <Outlet/>

    </div>

     );
}

export default Kid;
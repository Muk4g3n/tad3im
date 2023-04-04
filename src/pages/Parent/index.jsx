
import SideNav from 'components/SideNav';
import { Outlet } from 'react-router-dom';
import'./parent.css'

function Parent() {
    return ( <div className="board-holder">
    <SideNav/>
    <Outlet/>
    </div> );
}

export default Parent;
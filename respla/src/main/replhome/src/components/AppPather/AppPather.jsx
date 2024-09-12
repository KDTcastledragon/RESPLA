import './AppPather.css';
import AdminRouteBody from "../Admin/AdminRouteBody";
import AdminPageHeader from '../Admin/AdminPageHeader';
import MainHomeHeader from '../MainHomePage/Header/MainHomeHeader';
import RouteBody from "../MainHomePage/Body/RouteBody";

import AdminPageMenuBar from "../Admin/AdminPageMenuBar";


//===================================================================================================================
function AppPather() {
    const loginID = sessionStorage.getItem('loginID');
    return (
        <>
            {loginID === 'admin' ?
                <>
                    <AdminPageHeader></AdminPageHeader>
                    <div className="AppPatherAdminMenuBarRouteBody">
                        <div className='AppPatherAdminMenuBar'>
                            <AdminPageMenuBar></AdminPageMenuBar>
                        </div>
                        <div className='AppPatherAdminRouteBody'>
                            <AdminRouteBody></AdminRouteBody>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className='AppPatherMainHomeHeader'>
                        <MainHomeHeader></MainHomeHeader>
                    </div>
                    <div className='AppPatherMainHomeBody'>
                        <RouteBody></RouteBody>
                    </div>
                </>
            }
        </>
    )
}

export default AppPather;
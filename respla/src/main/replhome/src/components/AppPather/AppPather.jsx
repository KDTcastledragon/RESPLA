import './AppPather.css';
import AdminRouteBody from "../Admin/AdminRouteBody";
import AdminPageHeader from '../Admin/AdminPageHeader';
import MainHomeHeader from '../MainHomePage/Header/MainHomeHeader';
import RouteBody from "../MainHomePage/Body/RouteBody";

import AdminPageMenuBar from "../Admin/AdminPageMenuBar";
import AdminLogInPage from '../Admin/AdminLogInPage';


//===================================================================================================================
function AppPather() {
    const code = sessionStorage.getItem('admcode');
    const authenAdmin = sessionStorage.getItem('authenticationAdminPage');
    return (
        <>
            {code === 's9811' || code === 'a377' || code === 'd14' ?
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
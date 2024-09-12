import { Route, Routes } from "react-router-dom";

import AdminPage from "./AdminPage";

import UserListPage from "./UserList/UserListPage";
import SalesStatusPage from "./SalesStatus/SalesStatusPage";
import SeatManagementPage from "./SeatManagement/SeatManagementPage";
import ProductManagementPage from "./ProductManagement/ProductManagementPage";

function AdminRouteBody() {

    const isAuthenticated = sessionStorage.getItem('loginID') === 'admin'; // 인증 상태 확인


    return (
        <>
            <Routes>
                <Route path='/AdminPage' element={<AdminPage />} />
                <Route path='/UserListPage' element={<UserListPage />} />
                <Route path='/SalesStatusPage' element={<SalesStatusPage />} />
                <Route path='/SeatManagementPage' element={<SeatManagementPage />} />
                <Route path='/ProductManagementPage' element={<ProductManagementPage />} />
            </Routes>
        </>
    )
}

export default AdminRouteBody;
import { Route, Routes } from "react-router-dom";

import MainHomePage from "./MainHomePage";

import LogInPage from "../../LogIn/LogInPage";
import JoinPage from "../../Join/JoinPage";

import PurchaseSelectPage from "../../PurchaseProduct/PurchaseSelectPage";
import PurchasePage from "../../PurchaseProduct/PurchasePage";

import SeatPresentPage from "../../SeatPresent/SeatPresentPage";

import MyPage from "../../UserInfo/MyPage/MyPage";
import UserProfilePage from "../../UserInfo/MyPage/UserProfilePage";
import AdminLogInPage from "../../Admin/AdminLogInPage";

function RouteBody() {

    return (
        <>
            <Routes>
                <Route path='/' element={<MainHomePage />}></Route>

                <Route path='/AdminLogInPage' element={<AdminLogInPage />} ></Route>

                <Route path='/LogInPage' element={<LogInPage />} ></Route>
                <Route path='/JoinPage' element={<JoinPage />} ></Route>

                <Route path='/PurchaseSelectPage' element={<PurchaseSelectPage />} ></Route>
                <Route path='/PurchasePage' element={<PurchasePage />} ></Route>

                <Route path='/SeatPresentPage' element={<SeatPresentPage />} ></Route>

                <Route path='/MyPage' element={<MyPage />} ></Route>
                <Route path='/UserProfilePage' element={<UserProfilePage />} ></Route>
            </Routes>
        </>
    )
}

export default RouteBody;
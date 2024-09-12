import { Route, Routes } from "react-router-dom";

import MainHomePage from "./MainHomePage";

import LogInPage from "../../LogIn/LogInPage";
import JoinMemberPage from "../../JoinMembership/JoinMemberPage";

import PurchaseSelectPage from "../../PurchaseProduct/PurchaseSelectPage";
import PurchasePage from "../../PurchaseProduct/PurchasePage";

import SeatPresentPage from "../../SeatPresent/SeatPresentPage";

import MyPage from "../../UserInfo/MyPage/MyPage";
import UsageHistory from "../../UserInfo/MyPage/UsageHistory";
import UserProfilePage from "../../UserInfo/MyPage/UserProfilePage";

function RouteBody() {

    return (
        <>
            <Routes>
                <Route path='/' element={<MainHomePage />}></Route>

                <Route path='/LogInPage' element={<LogInPage />} ></Route>
                <Route path='/JoinMemberPage' element={<JoinMemberPage />} ></Route>

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
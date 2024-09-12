import './MyPage.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PurchaseHistory from './PurchaseHistory';
import UsageHistory from './UsageHistory';

function MyPage() {
    const nav = useNavigate();
    const loginID = sessionStorage.getItem('loginID');
    const [openPurchaseHistory, setOpenPurchaseHistory] = useState(false);
    const [openUsageHistory, setOpenUsageHistory] = useState(false);

    function openPurchaseHistoryModal() {
        setOpenPurchaseHistory(true);
    }

    function openUsageHistoryModal() {
        setOpenUsageHistory(true);
    }

    return (
        <div className='MyPageContainer'>
            <div className='myPageMenuButton'>
                <button onClick={() => nav('/UserProfilePage')}>회원정보</button>
                <button onClick={() => openPurchaseHistoryModal()}>구매이력</button>
                <button onClick={() => openUsageHistoryModal()}>사용기록</button>
            </div>

            {openPurchaseHistory &&
                <PurchaseHistory
                    setOpenPurchaseHistory={setOpenPurchaseHistory}
                    loginID={loginID}
                />
            }

            {openUsageHistory &&
                <UsageHistory
                    setOpenUsageHistory={setOpenUsageHistory}
                    loginID={loginID}
                />
            }
        </div>
    );
}

export default MyPage;
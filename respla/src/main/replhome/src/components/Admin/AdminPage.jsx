import './AdminPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserListPage from './UserList/UserListPage';

function AdminPage() {

    const navigator = useNavigate();

    const [loginID, setLoginID] = useState(null);

    useEffect(() => {
        const id = sessionStorage.getItem('loginID');
        if (id) {
            setLoginID(id);
        } else {
            navigator('/');  // 로그인되지 않은 상태에서 접근 시 홈으로 리다이렉트
        }
    }, [navigator]);

    const logout = () => {
        sessionStorage.clear();
        navigator('/');
        window.location.reload();
    }

    return (
        <>
            {loginID === 'admin' ?
                <div className='AdminPageContainer'>

                    <div>Admin Page FireTruck</div>
                    <button onClick={logout}>로그아웃</button>
                </div>

                :

                <div>허가되지 않은 접근입니다.</div>
            }
        </>
    );
}

export default AdminPage;
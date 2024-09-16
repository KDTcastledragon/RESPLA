import './AdminPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserListPage from './UserList/UserListPage';

function AdminPage() {

    const navigator = useNavigate();

    const adminID = sessionStorage.getItem('authenticatedAdminID');

    // useEffect(() => {
    //     const id = sessionStorage.getItem('loginID');
    //     if (adminID === 'superAdmin') {
    //         setLoginID(id);
    //     } else {
    //         navigator('/');  // 로그인되지 않은 상태에서 접근 시 홈으로 리다이렉트
    //         alert(`허가되지 않은 접근`);
    //         window.location.reload();
    //     }
    // }, [navigator]);

    const logout = () => {
        sessionStorage.clear();
        navigator('/');
        window.location.reload();
    }

    return (
        <>
            {adminID === 'superAdmin' ?
                <div className='AdminPageContainer'>

                    <div>{adminID}</div>
                    <button onClick={logout}>로그아웃</button>
                </div>

                :

                <div>허가되지 않은 접근입니다.</div>
            }
        </>
    );
}

export default AdminPage;
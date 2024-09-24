import './AdminPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminPage() {

    const navigator = useNavigate();

    const admcode = sessionStorage.getItem('admcode');
    const authentication = sessionStorage.getItem('authentication');

    console.log(admcode);

    const logout = () => {
        sessionStorage.clear();
        navigator('/');
        window.location.reload();
    }

    return (
        <>
            {admcode === 's9811' || admcode === 's377' || admcode === 's014' ?
                <div className='AdminPageContainer'>

                    <div>{authentication}</div>
                    <button onClick={logout}>로그아웃</button>
                </div>

                :

                <div>허가되지 않은 접근입니다.</div>
            }
        </>
    );
}

export default AdminPage;
import './AdminLogInPage.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogInPage() {
    const navigator = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    // sessionStorage.setItem('authenticationAdminPage', 'adminLogIn');
    // const authenAdmin = sessionStorage.getItem('authenticationAdminPage');
    // }, [])

    function adminLogIn() {
        axios({
            url: "/user/adminLogIn",
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: {
                id: id,
                password: password
            }

        }).then((r) => {
            sessionStorage.setItem('authenticatedAdminID', r.data.id);
            navigator('/AdminPage');
        }).catch((e) => {
            alert(`허가되지 않음`);
        })
    }

    const goHome = () => {
        sessionStorage.clear();
        navigator('/');
        window.location.reload();
    }

    return (
        <div className='AdminLogInPageContainer'>
            <div className='adminPageLogInBox'>
                <div className='adminIdPwBox'>
                    <input type="text" required
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value);
                        }} />
                    <input type="password" required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <div className='adminLogInButton'><button onClick={adminLogIn}>로그인</button></div>
            </div>
            <div className='adminHomeButton'><button onClick={goHome}>홈으로</button></div>
        </div>
    );
}

export default AdminLogInPage;
import './LogInPage.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogInPage() {
    const navigate = useNavigate();

    // ** 아이디 저장
    const [rememberID, setRememberID] = useState(false);

    useEffect(() => {
        const saveID = localStorage.getItem('saveID');
        if (saveID != null && saveID != '') {
            setId(saveID);
            setRememberID(true);
        }
    }, []);
    // ==============================================

    // ** 유효성 검사
    const [id, setId] = useState('');
    const [loginError, setLoginError] = useState('');

    const validateLogin = () => {
        if (id === '') {
            setLoginError('아이디를 입력하세요');
        }
    }


    // =========================================================
    // ** 로그인 버튼 활성화
    const [button, setButton] = useState(true);

    function changeButton() {
        id ? setButton(false) : setButton(true);
    }

    // ==========================================================
    // ** 엔터 키 누름
    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            if (e.target.id === 'id') {
                document.getElementById('password').focus();
            } else if (e.target.id === 'password') {
                logInButton();
            }
        }
    }

    // ===========================================================
    // ** 로그인 데이터 전송
    const logInButton = () => {
        if (rememberID) {
            localStorage.setItem('saveID', id);
        } else {
            localStorage.removeItem('saveID');
        }

        axios({
            url: "/user/login",
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: {
                id: id,
            }
            // [===로그인 성공시===]
        }).then((res) => {
            sessionStorage.setItem('user', JSON.stringify(res.data));
            sessionStorage.setItem('loginID', res.data.id);
            sessionStorage.setItem('loginName', res.data.name);
            if (sessionStorage.getItem('loginID') === 'admin') {
                navigate('/AdminPage');
                window.location.reload();
            } else {
                navigate('/');
            }
            // window.location.reload();

            // [===로그인 실패시===]
        }).catch((error) => {
            if (error.response.status == 401) {
                alert('아이디없음');
            } else {
                alert('없는 아이디입니다.');
            }
            window.location.reload();
        });
    }

    return (
        <div className='LogIn'>
            <div className="log_in_logo_container d-flex">
                <Link to={'/'} className="log_in_logo_link">
                    <img src="img/fox_logo.png" alt="findUserInfo_logo" className="find_userInfo_logo" />
                </Link>
                <span><h1>로그인</h1></span>
            </div>
            <form className='log_in_form'>
                <fieldset className="log_in_field d-flex">
                    <div>
                        <div>
                            <div>
                                <input id='id' className='log_in_id' name='id' required
                                    value={id} placeholder='휴대폰번호'
                                    onKeyUp={changeButton}
                                    onKeyDown={handleEnterKey}
                                    onChange={(e) => {
                                        setId(e.target.value);
                                        setLoginError('');
                                    }}
                                    onBlur={validateLogin} />
                            </div>

                        </div>
                        <div>
                            <button id='log_in_button' type="button" disabled={button} onClick={logInButton}>로그인
                            </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </fieldset>
            </form>
        </div >
    );
}

export default LogInPage;
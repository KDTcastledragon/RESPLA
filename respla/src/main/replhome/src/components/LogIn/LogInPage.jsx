import './LogInPage.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogInPage() {
    const navigator = useNavigate();

    // ==============================================

    const [id, setId] = useState();
    const [pw, setPw] = useState();


    // =====[로그인]======================================================
    function loginButton() {
        const data = { id: id, pw: pw }

        if (id === null) {
            alert(`아이디를 입력해주세요.`);

        } else if (pw === null) {
            alert(`비밀번호를 입력해주세요.`);

        } else {
            axios
                .post(`/user/login`, data)
                .then((res) => {
                    sessionStorage.setItem('loginID', res.data.id);
                    navigator('/');

                }).catch((error) => {
                    if (error.response.status === 401) {
                        alert('아이디없음');
                    } else if (error.response.status === 403) {
                        alert('이용이 제한된 사용자입니다.');
                    }

                    window.location.reload();
                });
        }
    }

    return (
        <div className='LogInPageContainer'>
            <div className='loginTitle'><span>카페 회원 로그인</span></div>
            <div className='loginBox'>
                <div className='loginIdPw'>
                    <div className='loginId'>
                        <span>아이디</span>
                        <input type="text" value={id}
                            onChange={(e) => setId(e.target.value)} minLength={10} />
                    </div>
                    <div className='loginPw'>
                        <span>비밀번호</span>
                        <input type="password" value={pw}
                            onChange={(e) => setPw(e.target.value)} minLength={15} />
                    </div>

                    <div className='findAndJoinBox'>
                        <button onClick={() => navigator('/')}>아이디/비밀번호 찾기</button>
                        <button onClick={() => navigator('/JoinPage')}>회원가입</button>
                    </div>
                </div>

                <div className='loginButton'><button onClick={loginButton}>로그인</button></div>
            </div>

        </div>
    );
}

export default LogInPage;
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
        const data = { id: id, password: pw }

        if (!id) {
            alert(`아이디를 입력해주세요.`);

        } else if (!pw) {
            alert(`비밀번호를 입력해주세요.`);

        } else {
            axios
                .post(`/user/login`, data)
                .then((res) => {
                    sessionStorage.setItem('loginID', res.data);
                    navigator('/');
                    alert(`로그인 성공`);

                }).catch((e) => {
                    if (e.response.status) {
                        switch (e.response.status) {
                            case 401:
                                alert('아이디 없음');
                                break;

                            case 403:
                                alert('이용이 제한된 사용자입니다.');
                                break;

                            case 409:
                                alert(`비밀번호가 틀립니다.`);
                                break;

                            default:
                                alert(`로그인 오류`);
                                break;
                        }
                    } else {
                        alert(`알 수 없는 오류`);
                    }
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
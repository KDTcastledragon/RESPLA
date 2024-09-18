import './JoinPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function JoinPage() {
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [checkPw, setCheckPw] = useState();
    const [name, setName] = useState();
    const [birth, setBirth] = useState();
    const [phoneNum, setPhoneNum] = useState();


    //======================
    function idDupCheck(dupId) {
        const data = { id: dupId }

        axios
            .post('/user/idDupCheck', data)
            .then((r) => {
                alert(`가능`);
            }).catch((e) => {
                alert(`겹침ㄴㄴ`);
            })
    }

    //======================
    function Join() {
        const data = {
            id: id,
            pw: pw,
            name: name,
            birth: birth,
            phoneNum: phoneNum
        }

        axios
            .post(`/user/join`, data)
            .then((r) => {
                alert(`회원가입 완료`);
            }).catch((e) => {
                console.log(`회원가입 실패`);
            })
    }

    function handleJoinData() {

    }


    //======================================================================================================================
    return (
        <div className='JoinPageContainer'>
            <div className='joinTitle'><span>회원가입</span></div>
            <div className='joinMemberData'>
                <div className='joinId'>
                    <span>아이디</span>
                    <input type="text" value={id} onChange={(e) => { setId(e.target.value) }} required autoComplete='off'

                    />
                    <button onClick={() => idDupCheck(id)}>중복체크</button>
                </div>

                <div className='joinId'>
                    <span>비번</span>
                    <input type="text" />
                </div>

                <div className='joinId'>
                    <span>이름</span>
                    <input type="text" />
                </div>

                <div className='joinId'>
                    <span>생년월일</span>
                    <input type="text" />
                </div>

                <div className='joinId'>
                    <span>휴대폰번호</span>
                    <input type="text" />
                </div>
            </div>

            <div className='joinButton'><button>회원가입하기</button></div>
        </div>
    );
}

export default JoinPage;
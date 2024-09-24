import './JoinPage.css';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

function JoinPage() {
    const [id, setId] = useState('');
    const [validId, setValidId] = useState(false);

    const [pw, setPw] = useState('');
    const [vaildPw, setValidPw] = useState(false);
    const [showPw, setShowPw] = useState(false);
    const [confirmPw, setConfirmPw] = useState();
    const [pwMsg, setPwMsg] = useState('');

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameMsg, setNameMsg] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberMsg, setPhoneNumberMsg] = useState('');

    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();

    const [activeJoinButton, setActiveJoinButton] = useState(true);

    const idRegex = /^[a-zA-Z0-9]*$/;
    const pwRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const noKorPwRegex = /^[^가-힣]*$/;
    const nameRegex = /^[가-힣a-zA-Z]*$/;
    const phoneNumberRegex = /^010\d{7,8}$/;


    // ** 생년월일 select 생성
    const currentYear = new Date().getFullYear();
    const yearList = Array.from({ length: 130 }, (_, index) => currentYear - index);
    const monthList = Array.from({ length: 12 }, (_, index) => index + 1);
    const dayList = Array.from({ length: 31 }, (_, index) => index + 1)

    // ** 숫자가 1자리인 경우 앞에 0을 붙임
    const formatDateNumber = (number) => {
        return String(number).padStart(2, '0');
    };

    //======================
    function idDupCheck() {
        // if (id.length < 5 || id.length > 10) {
        //     alert('아이디는 5자 이상, 10자 이하여야 합니다.');
        // } else if (!idRegex.test(id)) {
        //     alert(`아이디는 영문과 숫자만 가능합니다.`);
        // } else {
        //     const data = { id: id }

        //     axios
        //         .post('/user/idDupCheck', data)
        //         .then((r) => {
        //             alert(`가능`);
        //             setValidId(true);
        //         }).catch((e) => {
        //             alert(`겹침ㄴㄴ`);
        //         })
        // }

        setValidId(true);
        alert(`valid Id True`);
    }

    //======================
    function handleValidatePw() {
        if (pw.length < 7 || pw.length > 15) {
            setPwMsg('비밀번호는 7자 이상, 15자 이하여야 합니다.');
            setValidPw(false);
        } else if (!pwRegex.test(pw)) {
            setPwMsg('비밀번호에는 특수문자가 하나 이상 포함되어야 합니다.');
            setValidPw(false);
        } else if (!noKorPwRegex.test(pw)) {
            setPwMsg('한글은 비밀번호에 포함될 수 없습니다.');
            setValidPw(false);
        } else {
            setPwMsg('적절한 비밀번호');
            setValidPw(true);
        }
    }

    function handleValidateName() {
        if (name.length < 2) {
            setNameMsg('이름을 입력해주세요');
            setValidName(false);
        } else if (!nameRegex.test(name)) {
            setNameMsg('이름은 영문과 한글만 가능합니다');
            setValidName(false);
        } else {
            setValidName(true);
            setNameMsg('');
        }
    }

    function handleValidatePhoneNumber() {
        if (!phoneNumberRegex.test(phoneNumber)) {
            setPhoneNumberMsg('유효하지 않은 번호입니다');
            setValidPhoneNumber(false);
        } else if (phoneNumber.length < 11) {
            setPhoneNumberMsg('휴대폰번호를 모두 입력해주세요');
            setValidPhoneNumber(false);
        } else {
            setPhoneNumberMsg('');
            setValidPhoneNumber(true);
        }
    }

    console.log(id);
    console.log(pw);
    console.log(name);
    console.log(`${year}-${month}-${day}`);
    console.log(phoneNumber);

    //======================================================================================================================
    function join() {
        console.log(id);
        console.log(pw);
        console.log(name);
        console.log(`${year}-${month}-${day}`);
        console.log(phoneNumber);


        if (validId && vaildPw && pw === confirmPw && validName && id !== null && validPhoneNumber) {

            const data = {
                id: id,
                password: pw,
                user_name: name,
                birth: null,
                phone_number: phoneNumber
            }

            axios
                .post(`/user/join`, data)
                .then((r) => {
                    alert(`회원가입 완료`);
                }).catch((e) => {
                    console.log(`회원가입 실패`);
                    alert(`회원가입 실패`);
                })

        } else if (validId === false) {
            alert(`아이디 중복체크 검사를 해야합니다`);
        } else {
            alert(`각 항목을 조건에 맞게 모두 입력해주세요`);
        }
    }


    //======================================================================================================================
    return (
        <div className='JoinPageContainer'>
            <div className='joinTitle'><span>회원가입</span></div>
            <div className='joinMemberData'>
                <div className='joinId'>
                    <span>아이디</span>
                    <input type="text" value={id} onChange={(e) => { setId(e.target.value) }}
                        required autoComplete='off' minLength={5} maxLength={10}
                    />
                    <button onClick={() => idDupCheck(id)}>중복체크</button>
                </div>

                <div className='joinId'>
                    <span>비밀번호</span>
                    <input type={showPw ? 'text' : "password"} value={pw}
                        onChange={(e) => {
                            setPw(e.target.value)
                        }}
                        required autoComplete='off' minLength={8} maxLength={15} placeholder='특수문자 포함 8~15자리' onBlur={handleValidatePw}
                    />
                    <span>{pwMsg}</span>
                </div>

                <div className='joinId'>
                    <span>비밀번호 확인</span>
                    <input type={showPw ? 'text' : "password"} value={confirmPw} onChange={(e) => { setConfirmPw(e.target.value) }}
                        required autoComplete='off' minLength={8} maxLength={15} placeholder='비밀번호 재입력'
                    />
                    <button onClick={() => setShowPw(p => !p)}>{showPw ? '비밀번호 감추기' : '비밀번호 보기'}</button>
                    {vaildPw === true && pw !== null && confirmPw !== null && pw === confirmPw ? <span>비밀번호 일치</span>
                        : vaildPw === true && pw !== null && confirmPw !== null && pw !== confirmPw ? <span>비밀번호 불일치</span>
                            : <span>비밀번호 검사 필요</span>}

                </div>

                <div className='joinId'>
                    <span>이름</span>
                    <input type="text" value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setNameMsg('')
                        }}
                        required autoComplete='off' minLength={1} maxLength={30} onBlur={handleValidateName}
                    />
                    <span>{nameMsg}</span>
                </div>

                <div className='joinId'>
                    <div>
                        <span className=''>생년월일</span>
                        <select required onChange={(e) => setYear(e.target.value)}>
                            {yearList.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        <span>년</span>

                        <select required onChange={(e) => setMonth(e.target.value)} size={1}>
                            {monthList.map((month) => (
                                <option key={month} value={month}>{formatDateNumber(month)}</option>
                            ))}
                        </select>
                        <span>월</span>

                        <select required onChange={(e) => setDay(e.target.value)}>
                            {dayList.map((day) => (
                                <option key={day} value={day}>{formatDateNumber(day)}</option>
                            ))}
                        </select>
                        <span>일</span>
                    </div>
                </div>

                <div className='joinId'>
                    <span>휴대폰번호</span>
                    <input type="text" value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value)
                            setPhoneNumberMsg('');
                        }}
                        required autoComplete='off'
                        minLength={11} maxLength={11} placeholder={`' - '없이 010포함해서 작성해주세요`} onBlur={handleValidatePhoneNumber}
                    />
                    <span>{phoneNumberMsg}</span>
                </div>
            </div>

            <div className='joinButton'><button onClick={join} disabled={activeJoinButton}>가입하기</button></div>
        </div>
    );
}

export default JoinPage;
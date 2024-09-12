// import './MainHomePage.css';

// import axios from "axios";
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function TempWind(props) {
//     const navigator = useNavigate();
//     const loginID = sessionStorage.getItem("loginID");

//     //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@여기서부턴 나의 실험이다@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//     function buybuybuy(product_code, p_type, start, end) {

//         const purchasedData = {
//             id: loginID,
//             product_code: product_code,
//             p_type: p_type,
//             startDateTime: start,
//             endDateTime: end,
//             paymentOption: 'tempwind',
//             order_type: 'normal'
//         }

//         // axios
//         //     .post(`/product/isDateConflict`, purchasedData)
//         //     .then((r) => {
//         axios
//             .post('/product/payment', purchasedData)
//             .then((response) => {
//                 props.ssaeee('구매를 성공해버렷다고???!');
//                 props.setnu((prevNu) => {
//                     if (prevNu >= 9999) {
//                         return 1;  // 0으로 초기화하고 100을 추가한 값
//                     } else {
//                         return prevNu + 1;
//                     }
//                 });
//             }).catch(error => {
//                 alert(`오류꺼`);
//             });
//         // }).catch((e) => {
//         //     alert(`날짜가 겹치네  다시 선택혀.`);
//         // })


//     }

//     //==[0. 초기 시간 설정]====================================================================================
//     const now = new Date();
//     const offset = now.getTimezoneOffset();
//     const KoreaLocalDate = new Date(now.getTime() - (offset * 60000));    // - (offset * 60000) 보정 계산이 중요하다.
//     const getLocalDatetime = KoreaLocalDate.toISOString().slice(0, 16);

//     const [startDateTime, setStartDateTime] = useState(getLocalDatetime);

//     const startDateFormat = new Date(startDateTime);
//     // const calculatedEndDate = new Date(startDateFormat.getTime() + (props.dayvalue * 60 * 60 * 1000) - (offset * 60000));  // Hours 단위에 맞게 계산.
//     const calculatedEndDate = new Date(startDateFormat.getTime() + (props.day_value * 1000) - (offset * 60000));  // Hours 단위에 맞게 계산.
//     const getEndDateLocalTime = calculatedEndDate.toISOString().slice(0, 16);

//     const [endDateTime, setEndDateTime] = useState(getEndDateLocalTime);

//     //===[1. 종료날짜 계산]==================================================================================================================
//     function calculateEndDateTime(changedStartTime) {
//         const changedstartDateFormat = new Date(changedStartTime);
//         // const calculatedchangedEndDate = new Date(changedstartDateFormat.getTime() + (props.dayvalue * 60 * 60 * 1000) - (offset * 60000));  // Hours 단위에 맞게 계산.
//         const calculatedchangedEndDate = new Date(changedstartDateFormat.getTime() + (props.day_value * 1000) - (offset * 60000));
//         const getChangedEndDateLocalTime = calculatedchangedEndDate.toISOString().slice(0, 16);
//         setEndDateTime(getChangedEndDateLocalTime);
//     }

//     //===[2. 시작날짜 선택 & 이전 날짜 선택 방지.]===============================================================================================
//     const selectStartDateTime = (e) => {
//         if (e.target.value < getLocalDatetime) {
//             alert('현재 시간보다 이전의 시간은 선택할 수 없습니다.');
//             setStartDateTime(getLocalDatetime);

//         } else {
//             setStartDateTime(e.target.value);
//             calculateEndDateTime(e.target.value);
//         }
//     };

//     function extendDayPass(p_code, p_type) {
//         const purchasedData = {
//             id: loginID,
//             product_code: p_code,
//             p_type: p_type,
//             startDateTime: null,
//             endDateTime: null,
//             paymentOption: 'tempwind',
//             order_type: 'extend'

//         }

//         // axios
//         //     .post(`/product/isDateConflict`, purchasedData)
//         //     .then((r) => {
//         axios
//             .post('/product/extendDayPass', purchasedData)
//             .then((response) => {
//                 props.ssaeee('구매를 성공해버렷다고???! ');
//                 props.setnu((prevNu) => {
//                     if (prevNu >= 9999) {
//                         return 1;  // 0으로 초기화하고 100을 추가한 값
//                     } else {
//                         return prevNu + 1;
//                     }
//                 });
//             }).catch(error => {
//                 alert(`오류꺼`);
//             });
//         // }).catch((e) => {
//         //     alert(`날짜가 겹치네 다시 선택.`);
//         // })


//     } //쉬발거



//     return (
//         <>
//             <div style={{ width: '200px', height: '200px', backgroundColor: 'yellowgreen' }}>

//                 <div style={{ width: '200px', height: '50px', backgroundColor: 'yellowgreen' }}>

//                     <span>{props.p_type === 'm' ? '시간권' : props.p_type === 'd' ? '기간권' : '고정석'} : </span>
//                     <span>{props.time_value / 60 === 0 ? null : props.time_value / 60}</span>
//                     <span>&nbsp;&nbsp;{props.day_value === 0 ? null : props.day_value / 24 / 7 > 50 ? '1년' : props.day_value / 24 / 7}</span>

//                     {props.p_type === 'm' ?
//                         <button style={{ width: '200px', height: '50px', backgroundColor: 'burlywood' }}
//                             onClick={() => buybuybuy(props.product_code, props.p_type, null, null)}>
//                             사장님 여기 {props.time_value}분 추가욧
//                         </button>

//                         : props.p_type === 'd' ?
//                             <button style={{ width: '200px', height: '50px', backgroundColor: 'cadetblue' }}
//                                 onClick={() => buybuybuy(props.product_code, props.p_type, startDateTime, endDateTime)}>
//                                 사장님 여기 {props.day_value}기간권 추가욧
//                             </button>

//                             : props.p_type === 'f' ?
//                                 <>
//                                     <button style={{ width: '200px', height: '50px', backgroundColor: 'cornflowerblue' }}
//                                         onClick={() => buybuybuy(props.product_code, props.p_type, startDateTime, endDateTime)}>
//                                         사장님 여기 {props.day_value}고정석 추가욧
//                                     </button>

//                                     <button style={{ width: '200px', height: '50px', backgroundColor: 'black', color: 'white' }}
//                                         onClick={() => extendDayPass(props.product_code, props.p_type)}>
//                                         사장님 여기 {props.day_value}연장이요옷
//                                     </button>
//                                 </>

//                                 : null}

//                 </div>

//                 {props.ptype === 'm' ? null

//                     :

//                     <div style={{ width: '130px', height: '50px', marginTop: '96px' }} >
//                         <div className='aaaa'>
//                             <input type="datetime-local"
//                                 value={startDateTime}
//                                 onChange={selectStartDateTime}
//                                 min={getLocalDatetime}
//                             />
//                         </div>
//                         <div >
//                             <input type="datetime-local"
//                                 value={endDateTime}
//                                 onChange={selectStartDateTime}
//                                 readOnly
//                             />
//                         </div>
//                     </div>

//                 }

//                 {/* <div className='loginedMenuLogout'><button onClick={logout} style={{ width: '100px', height: '30px' }}>로그아웃</button></div> */}
//             </div >
//         </>
//     )
// }
// export default TempWind;
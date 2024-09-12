import './SeatModal.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function SeatModal(props) {
    const navigator = useNavigate();
    const loginID = sessionStorage.getItem("loginID");
    const menuType = sessionStorage.getItem('menuType');
    const usedUppcode = sessionStorage.getItem('uppcode');

    //==[1. esc 입력시, Modal 닫힘 설정 함수] =======================================================================================
    function handleEscKey(e) {
        if (e.key === 'Escape') {
            props.setSeatModalOpen(false);
        }
    };


    //==[2. 모달창 오픈시에 자동으로 Esc 키 이벤트를 감지하도록 설정]=============================================================
    useEffect(() => {
        window.addEventListener('keydown', handleEscKey);

        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };

    }, []);


    //===================================================================================================
    function closeModalBackGround(e) {
        if (e.target.classList.contains('SeatModalContainerBackground')) {
            props.setSeatModalOpen(false);
        }
    }

    //====[입실 함수]===============================================================
    function checkInRequest(occupiedId) {

        const checkInData = {
            seat_num: props.seat_num,
            id: loginID,
            upp_code: usedUppcode,
        }

        if (occupiedId === null) {
            axios
                .post(`/seat/checkIn`, checkInData)
                .then((response) => {
                    console.log(`체크인 성공`, response.data);
                    navigator('/');
                    alert(`입실 하였습니다.`, response.data);
                }).catch((error) => {
                    if (error.response) {
                        switch (error.response.status) {
                            case 409:
                                alert(`이미 입실 하였습니다.`);
                                break;

                            case 403:
                                alert(`기간권 상품 사용중에는 중복 사용을 방지하기 위하여 \n시간권 사용을 허용하지 않고 있습니다.`);
                                break;

                            case 422:
                                alert(`선택하신 상품의 기간이 만료되었습니다. \n상품을 재구매 해주세요.`);
                                break;

                            case 400:
                                alert(`상품 선택 오류. 재입실을 시도 해주세요.`);
                                break;

                            default:
                                alert(`알수없는 오류??`);
                                break;
                        }
                    } else {
                        alert(`status없는 체크인 오류`);
                    }
                })

        } else {
            alert(`다른 이용자가 사용중인 자리입니다.`);
        }
    };


    //=====[퇴실 함수]====================================================
    function checkOutRequest(occupiedId) {
        const checkOutData = {
            seat_num: props.seat_num,
            id: loginID,
            upp_code: props.upp_code
        }

        if (occupiedId && occupiedId === loginID) {
            axios
                .post(`/seat/checkOut`, checkOutData)
                .then((response) => {
                    navigator('/');
                    alert(`퇴실처리 되었습니다.`, response.data);
                }).catch((error) => {
                    console.log(`실패`, error.message);
                    alert(`체크아웃실패ㅠㅠㅠㅠㅠ`, error.message);
                });
        } else {
            alert(`checkOut Error`);
        }
    };


    //=====[자리이동 함수]===================================================================================
    function moveSeatRequest(occupiedId) {
        const moveSeatData = {
            seat_num: props.seat_num,
            id: loginID,
        }

        axios
            .post(`/seat/moveSeat`, moveSeatData)
            .then((response) => {
                console.log(`자리이동 성공`, response.data);
                navigator('/');
                alert(`자리이동 성공`, response.data);
            }).catch((error) => {
                console.log(`자리이동 실패`, error.message);
                alert(`자리이동 실패.....`, error.message);

            });
    };

    //===================================================================================================
    return (
        <div className='SeatModalContainerBackground' onClick={closeModalBackGround}>
            <div className="SeatModalContainer" onClick={(e) => e.stopPropagation()}>
                <div className='seatModalSeatNumber'>
                    <span>좌석번호</span>
                    <span>&nbsp; : &nbsp;</span>
                    <span>{props.seat_num}</span>
                </div>

                <div className='seatModalConFirmBox'>
                    {menuType === 'checkin' ?
                        <button className='checkInConfirm' onClick={() => checkInRequest(props.id)}>입실하기</button>

                        : menuType === 'checkout' ?
                            <button className='checkOutConfirm' onClick={() => checkOutRequest(props.id)}>퇴실하기</button>

                            : menuType === 'moveseat' ?
                                <button className='moveSeatConfirm' onClick={() => moveSeatRequest(props.id)}>자리이동</button>
                                :

                                null}


                    <button onClick={() => props.setSeatModalOpen(false)}>닫기</button>
                </div>
            </div>
        </div>
    )
};

export default SeatModal;
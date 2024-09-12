import './SeatManagementPage.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import SeatUnit from './SeatUnit';
import SeatSearchModal from './SeatSearchModal';
import SeatUnitControlModal from './SeatUnitControlModal';


function SeatManagementPage() {

    const [seatsData, setseatsData] = useState([]);
    const [seatUnitControlModalOpen, setSeatUnitControlModalOpen] = useState(false);

    useEffect(() => {
        axios
            .get(`/seat/presentAllSeats`)
            .then((r) => {
                // console.log(`관리자 좌석 현황 성공 : ${r.data}`)
                setseatsData(r.data);
            }).catch((e) => {
                console.log(`관리자 좌석현황 실패 : ${e.message}`);
                alert(`관리자 좌석 현황 실패`);
            })


        // 클린업 함수
        return () => {
            sessionStorage.setItem('seat', null);
        };

    }, []);

    function searchSeat() {
        sessionStorage.setItem('seat', 'search');
        setSeatUnitControlModalOpen(true);
    }

    console.log(sessionStorage.getItem('seat'));

    //===============================================================================================================================
    return (
        <div className='SeatManagementPageContainer'>
            <div className='seatPresent'>
                <div className='seatSearchButton'><button onClick={() => searchSeat()}>좌석 검색</button></div>

                <div className='topCenter2'>
                    {seatsData.slice(0, 10).map((d, i) => (
                        <SeatUnit
                            key={i}
                            seat_num={d.seat_num}
                            occupied={d.occupied}
                            id={d.id}
                            upp_code={d.upp_code}
                        />
                    ))}
                </div>

                <div className='leftSide2'>
                    {seatsData.slice(10, 30).map((d, i) => (
                        <SeatUnit
                            key={i + 8}
                            seat_num={d.seat_num}
                            occupied={d.occupied}
                            id={d.id}
                            upp_code={d.upp_code}
                        />
                    ))}
                </div>

                <div className='rightSide2'>
                    {seatsData.slice(30, 50).map((d, i) => (
                        <SeatUnit
                            key={i + 22}
                            seat_num={d.seat_num}
                            occupied={d.occupied}
                            id={d.id}
                            upp_code={d.upp_code}
                        />
                    ))}
                </div>

                <div className='centerSection2'>
                    {seatsData.slice(36).map((d, i) => (
                        <SeatUnit
                            key={i + 36}
                            seat_num={d.seat_num}
                            occupied={d.occupied}
                            id={d.id}
                            upp_code={d.upp_code}
                        />
                    ))}
                </div>

            </div>

            {seatUnitControlModalOpen &&
                <SeatUnitControlModal
                    seatUnitControlModalOpen={seatUnitControlModalOpen}
                    setSeatUnitControlModalOpen={setSeatUnitControlModalOpen}
                />
            }

        </div>
    )
}

export default SeatManagementPage;
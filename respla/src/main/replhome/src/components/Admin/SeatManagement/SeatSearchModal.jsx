import './SeatSearchModal.css';
import axios from 'axios';
import { useState } from 'react';

import SeatUnitControlModal from './SeatUnitControlModal';

function SeatSearchModal({ setSearchOpen }) {
    const [seatUnitControlModalOpen, setSeatUnitControlModalOpen] = useState(false);
    const [searchWord, setSearchWord] = useState();
    const [seatData, setSeatData] = useState({});

    function searchSeat() {
        axios
            .get(`/seat/selectBySearchWord?searchWord=${searchWord}`)
            .then((r) => {
                setSeatData(r.data);
                console.log(r.data);
                setSearchOpen(false);
                setSeatUnitControlModalOpen(true);
                // alert(`성공`);
            }).catch((e) => {
                alert(`실패`);
            })
    }

    console.log(seatData);

    //=============================================================================================================
    return (
        <>
            <div className='SeatSearchModalBackGround'>
                <div className='SeatSearchModalContainer'>
                    <span className=''>유저 ID</span>
                    <input
                        type="text"
                        className='userListSearchInputText'
                        value={searchWord}
                        onChange={(e) => setSearchWord(e.target.value)}
                    />
                    <button className='userListSearchButton' onClick={searchSeat}>검색</button>

                    <div><button onClick={() => setSearchOpen(false)}>닫기</button></div>
                </div>


            </div>
            {seatUnitControlModalOpen && (
                // Object.keys(seatData).length > 0 ?
                <SeatUnitControlModal
                    seat_num={seatData.seat_num}
                    id={seatData.seat_num}
                    occupied={seatData.occupied}
                    uppcode={seatData.upp_code}
                    seatUnitControlModalOpen={seatUnitControlModalOpen}
                    setSeatUnitControlModalOpen={setSeatUnitControlModalOpen}
                />
                // :
                // <div>{null}</div>



            )}
        </>
    )
}

export default SeatSearchModal;
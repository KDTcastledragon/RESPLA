import './SeatUnit.css';
import { useState } from 'react';

import SeatUnitControlModal from './SeatUnitControlModal';

function SeatUnit(props) {
    const [seatUnitControlModalOpen, setSeatUnitControlModalOpen] = useState(false);

    const seatClick = () => {
        sessionStorage.setItem('seat', 'click');
        setSeatUnitControlModalOpen(true);
    }

    //==================================================================================================================================
    return (
        <div>
            <div className={props.occupied === false ? 'SeatContainer' : 'seatUsed'} onClick={seatClick}>

                <div>
                    <span>{props.seat_num}</span>
                </div>

                {props.occupied === false ?
                    <>
                        {null}
                    </>
                    :
                    <>
                        <div>ID : {props.id}</div>
                        {/* <div>upp : {props.upp_code}</div> */}
                    </>
                }
            </div>

            {seatUnitControlModalOpen &&
                <>
                    <SeatUnitControlModal
                        seat_num={props.seat_num}
                        id={props.id}
                        occupied={props.occupied}
                        upp_code={props.upp_code}
                        seatUnitControlModalOpen={seatUnitControlModalOpen}
                        setSeatUnitControlModalOpen={setSeatUnitControlModalOpen}
                    />
                </>

            }

        </div>
    )
};

export default SeatUnit;
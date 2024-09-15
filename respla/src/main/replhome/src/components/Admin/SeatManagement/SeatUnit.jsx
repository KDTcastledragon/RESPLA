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
            <div className={props.occupied === false ? 'SeatAdminContainer' : 'seatAdminUsed'} onClick={seatClick}>

                <div className='seatNum'>
                    <span>{props.seat_num}</span>
                </div>

                {props.occupied === false ?
                    <>
                        {null}
                    </>
                    :
                    <>
                        <div className='seatAdminUserId'><span>{props.id}</span></div>
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
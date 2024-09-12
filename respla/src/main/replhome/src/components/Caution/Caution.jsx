import './Caution.css';

function Caution({ setCautionContainerOpen }) {
    return (
        <div className='cautionContainerBackGround'>
            <div className='cautionContainer'>
                <div className='cautionTitle'><span>{`< 카페이용 주의사항 >`}</span></div>
                <div className='cautionBox'>
                    <div className='caution'>
                        <span>
                            1. <span className='grnTxt'>시간권</span>의 유효기간은 <span className='boldTxt'>영구적</span>이며,
                            남은시간이 모두 차감된다면 사용이 제한됩니다.
                        </span>
                    </div>

                    <div className='caution'>
                        <span>
                            2. <span className='bluTxt'>기간권/고정석</span>은
                            정확히 <span className='boldTxt'>선택하신 시작날짜</span>가 되었을 때 사용가능합니다.
                        </span>
                        <span>
                            (ex. 시작날짜가 <span className='boldTxt'>2024-08-09 21:15:00</span>인 상품은&nbsp;
                            <span className='boldTxt'>2024-08-09 21:14:59</span>까지 <span className='boldTxt'>사용불가</span>.)
                        </span>
                    </div>

                    <div className='caution'>
                        <span>
                            3. <span className='bluTxt'>고정석</span>을 이용중이어도 <span className='boldTxt'>입실</span>을 하셔야만
                            카페를 이용할 수 있습니다. (보안문제)
                        </span>
                    </div>

                    <div className='caution'>
                        <span>
                            4. (상품분류와 상관없이) 사용중인 상품의 <span className='boldTxt'>유효시간/기간 만료</span> 시,
                            사용가능한 보유상품이 없다면&nbsp;
                            <span className='boldTxt'>자동퇴실처리</span> 됩니다.
                        </span>
                    </div>

                    <div className='caution'>
                        <span>5. <span className='bluTxt'>기간권/고정석</span> 유효기간중에는, <span className='boldTxt'>중복사용 방지</span>를 위해&nbsp;
                            <span className='grnTxt'>시간권</span> 사용이 <span className='boldTxt'>제한</span>됩니다.</span>
                    </div>

                    <div className='caution'>
                        <span>
                            6. <span className='grnTxt'>시간권</span> 사용중, <span className='bluTxt'>기간권/고정석</span>&nbsp;
                            <span className='boldTxt'>구입 후 즉시사용</span>시,
                            또는 <span className='boldTxt'>예약구매</span>하신 <span className='bluTxt'>기간권/고정석</span> 상품의&nbsp;
                            <span className='boldTxt'>시작날짜</span>가 되었을 시에는
                        </span>
                        <span>
                            <span className='grnTxt'>시간권</span> 사용이 자동중단되며 <span className='bluTxt'>기간권/고정석</span> 상품으로&nbsp;
                            <span className='boldTxt'>자동 재입실</span> 처리됩니다.
                        </span>
                        <span>
                            <span className='bluTxt'>고정석</span> 상품의 경우,
                            사용중이셨던 좌석이 <span className='boldTxt'>고정좌석</span>으로 <span className='boldTxt'>자동 전환</span>됩니다.
                        </span>
                        <span>
                            <span className='boldTxt'>사용중단</span>된 <span className='grnTxt'>시간권</span>은,&nbsp;
                            <span className='bluTxt'>기간권/고정석</span>의 유효기간이 끝난 후&nbsp;
                            <span className='boldTxt'>자유롭게 사용 가능</span>합니다.
                        </span>
                    </div>

                    <div className='caution'>
                        <span>
                            7. (상품분류와 상관없이) <span className='boldTxt'>입실</span>중 사용중인 상품이 <span className='boldTxt'>만료</span>될 시
                        </span>
                        <span>
                            <span className='grnTxt'>시간권</span>과 사용가능한 <span className='bluTxt'>기간권/고정석</span>을&nbsp;
                            <span className='boldTxt'>함께 보유중</span>인 경우, <span className='bluTxt'>기간권/고정석</span>이&nbsp;
                            <span className='boldTxt'>우선 사용</span>되어 <span className='boldTxt'>자동 재입실</span> 처리됩니다.
                        </span>
                        <span>
                            <span className='grnTxt'>시간권</span>만 보유중일 경우, <span className='grnTxt'>시간권</span>이&nbsp;
                            <span className='boldTxt'>자동으로 사용</span>되며 <span className='boldTxt'>자동 재입실</span> 처리됩니다.
                        </span>
                        <span>(ex. 상품 만료시에 시간권(24시간) , 시간권(12시간) , 고정석(12주)을 보유하셨을 경우, 고정석(12주) 상품으로 자동 재입실 처리.)</span>

                    </div>

                    <div className='caution'>
                        <span>
                            8. 카페의 <span className='boldTxt'>모든 좌석</span>은&nbsp;
                            <span className='boldTxt'>매일 05시</span>에 <span className='boldTxt'>자동 퇴실</span>처리됩니다.
                        </span>
                        <span>
                            <span className='grnTxt'>시간권</span>의 경우,&nbsp;
                            <span className='boldTxt'>자동퇴실처리</span>와 함께 시간차감도 <span className='boldTxt'>중단</span>됩니다.
                        </span>
                        <span>
                            <span className='bluTxt'>고정석</span>의 경우, 좌석은 <span className='boldTxt'>유지</span>되며&nbsp;
                            <span className='boldTxt'>사용자의 이용상태</span> 만 퇴실로 변경됩니다.
                        </span>
                    </div>

                </div>

                <div className='closeCautionButton'><button onClick={() => setCautionContainerOpen(false)}>닫기</button></div>
            </div>
        </div>
    );
}

export default Caution;
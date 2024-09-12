import './SalesStatusPage.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import SaledProductItem from './SaledProductItem2';

function SalesStatusPage() {

    const [productData, setProductData] = useState([]);
    const [maxCount, setMaxCount] = useState();
    const [dateModalOpen, setDateModalOpen] = useState(false);

    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
        setAnimateBars(false);
        const timer = setTimeout(() => {
            setAnimateBars(true); // 100ms 후에 애니메이션 실행
        }, 100);

        axios
            .get(`/product/allProductList`)
            .then((r) => {
                setProductData(r.data);
                const maxCountValue = Math.max(...r.data.map((d) => Math.max(d.sell_count, d.refund_count)));
                setMaxCount(maxCountValue + (maxCountValue / 3));
                // console.log(`분석데이터성공`);
            }).catch((e) => {
                alert(`실패`);
            })

        // setTimeout(() => {
        //     setAnimateBars(true);
        // }, 30);

        return () => {
            clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
            setAnimateBars(false);
        };
    }, [])


    //=================================================================================================================================
    return (
        <div className='SalesStatusPageContainer'>
            <div className=''>
                {/* <button>상품별 기준</button> */}
                {/* <button onClick={() => setDateModalOpen(true)}>연도별 기준</button> */}
                <hr />
            </div>
            <div className='new_Area'>
                {productData.map((d, i) => (
                    <>
                        <div>
                            <div className="barTrack22">
                                {/* <span>4567</span> */}
                                <span>{d.sell_count}</span>
                                {/* <div className={d.p_type === 'm' ? 'timebar' : d.p_type === 'd' ? 'daybar' : d.p_type === 'f' ? 'fixbar' : null}
                                    style={{ height: `${(d.sell_count / maxCount) * 100}%` }}>
                                </div> */}
                                <div className={d.p_type === 'm' ? 'timebar' : d.p_type === 'd' ? 'daybar' : d.p_type === 'f' ? 'fixbar' : null}
                                    style={{
                                        height: animateBars ? `${(d.sell_count / maxCount) * 100}%` : '0',
                                    }}>
                                </div>
                            </div>
                            <div>{d.p_type === 'm' ? 'T' : d.p_type === 'd' ? 'D' : d.p_type === 'f' ? 'F' : null}</div>
                            <div>{d.p_type === 'm' ? d.time_value : d.day_value}</div>
                            <div>{d.price}</div>
                        </div>
                    </>
                ))}
            </div>
            {/* <div className='saledTimePassList'>

                {productData.filter(d => d.p_type === 'm').map((d, i) => (
                    <SaledProductItem
                        key={i}
                        product_code={d.product_code}
                        p_type={d.p_type}
                        time_value={d.time_value}
                        day_value={d.day_value}
                        price={d.price}
                        sell_count={d.sell_count}
                        refund_count={d.refund_count}
                        maxCount={maxCount}
                    />
                ))}
            </div>
            <div className='saledDayPassList'>
                {productData.filter(d => d.p_type === 'd').map((d, i) => (
                    <SaledProductItem
                        key={i}
                        product_code={d.product_code}
                        p_type={d.p_type}
                        time_value={d.time_value}
                        day_value={d.day_value}
                        price={d.price}
                        sell_count={d.sell_count}
                        refund_count={d.refund_count}
                        maxCount={maxCount}
                    />
                ))}
            </div>
            <div className='saledFixedList'>
                {productData.filter(d => d.p_type === 'f').map((d, i) => (
                    <SaledProductItem
                        key={i}
                        product_code={d.product_code}
                        p_type={d.p_type}
                        time_value={d.time_value}
                        day_value={d.day_value}
                        price={d.price}
                        sell_count={d.sell_count}
                        refund_count={d.refund_count}
                        maxCount={maxCount}
                    />
                ))}
            </div> */}
            <div className='sales'></div>

            {
                dateModalOpen && (
                    <div className='dateModalContainer'>

                    </div>
                )
            }
        </div >
    )
}

export default SalesStatusPage;
import './PurchasePage.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import PurchaseItem from './PurchaseItem';

function PurchasePage() {
    const loginID = sessionStorage.getItem('loginID');
    const ptype = sessionStorage.getItem('ptype');
    const [productData, setProductData] = useState([]);
    const [timePassProducts, setTimePassProducts] = useState([]);
    const [dayPassProducts, setDayPassProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`/product/productListByPType?ptype=${ptype}`)
            .then((response) => {
                console.log('productList성공');
                setProductData(response.data);

            }).catch((e) => {
                alert(`productList실패`);
            })

        setTimePassProducts(productData.filter(data => data.p_type === 'm'));
        setDayPassProducts(productData.filter(data => data.p_type === 'd' || data.p_type === 'f'));

        // ===================================================================
        // // 다음 정각까지 남은 시간 계산 함수
        // const getTimeUntilNextMinute = () => {
        //     const now = new Date();
        //     const nextMinute = new Date(now.getTime() + (60 - now.getSeconds()) * 1000);
        //     nextMinute.setSeconds(0);
        //     nextMinute.setMilliseconds(0);
        //     return nextMinute - now;
        // };

        // // 초기 타이머 설정
        // const initDelay = getTimeUntilNextMinute();

        // // 초기 지연 후 첫 번째 새로고침 설정
        // const timerId = setTimeout(() => {
        //     window.location.reload();

        //     setInterval(() => {
        //         window.location.reload();
        //     }, 180000); // 3분간격으로 정각마다 새로고침
        // }, initDelay);

        // return (() => clearTimeout(timerId)); // 컴포넌트가 언마운트되면 타이머를 정리
    }, []);


    //================================================================================================================
    return (
        <>
            <div className={ptype === 'm' ? 'PurchasePageContainerTimePass' : 'PurchasePageContainerDayPass'}>
                {productData.map((d, i) => (
                    <PurchaseItem
                        key={i}
                        product_code={d.product_code}
                        time_value={d.time_value}
                        day_value={d.day_value}
                        price={d.price}
                        sell_count={d.sell_count}
                        refund_count={d.refund_count}
                    />
                ))}
            </div>
        </>
    )
}

export default PurchasePage;
import './ProductManagementPage.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductManagementPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`/product/allProductList`)
            .then((r) => {
                setProducts(r.data);
            }).catch((e) => {
                alert(`실패`);
            })
    }, [])


    //======================================================================
    return (
        <div className='ProductManagementPageContainer'>
            {products.map((d, i) => (
                <>
                    <div>
                        <span>상품코드 : </span>
                        <span>{d.product_code} /::/::/ </span>
                        <span>{d.p_type === 'm' ? '시간권' :
                            d.p_type === 'd' ? '기간권' :
                                d.p_type === 'f' ? '고정석' : null} / </span>
                        <span>{d.time_value} / </span>
                        <span>{d.day_value} / </span>
                        <span>{d.price} 원</span>
                    </div>
                </>
            ))}
        </div>
    )
}

export default ProductManagementPage;
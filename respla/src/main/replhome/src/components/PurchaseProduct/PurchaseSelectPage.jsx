import './PurchaseSelectPage.css';
import { Link, useNavigate } from 'react-router-dom';

function PurchaseSelectPage() {
    const navigator = useNavigate();

    function purchasePage(ptype) {
        sessionStorage.setItem('ptype', ptype);
        navigator('/PurchasePage');
    }

    return (
        <div className='PurchaseSelectPageContainer'>
            <div className='selectProductBox'>
                <div className='purchaseTimePass'><button onClick={() => purchasePage('m')}>시간권</button></div>
                <div className='purchaseDayPass'><button onClick={() => purchasePage('d')}>기간권</button></div>
                <div className='purchaseFixed'><button onClick={() => purchasePage('f')}>고정석</button></div>
            </div>
        </div>
    )
}

export default PurchaseSelectPage;
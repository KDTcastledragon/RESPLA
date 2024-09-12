import './UserProfilePage.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

function UserProfilePage() {
    const [userData, setUserData] = useState({});
    const userId = sessionStorage.getItem('loginID');

    useEffect(() => {
        const data = { id: userId }

        axios
            .post(`/user/profile`, data)
            .then((r) => {
                setUserData(r.data);
            })
    }, [])


    //================================================================================================================== 
    return (
        <div className='UserProfilePageContainer'>
            <table>
                <thead>
                    <th></th>
                </thead>
            </table>
            <div>{userData.id}</div>
            <div>{userData.user_name}</div>
            <div>{userData.birth}</div>
            <div>{userData.phone_number}</div>
            <div>{userData.join_date}</div>
        </div>
    );
}

export default UserProfilePage;
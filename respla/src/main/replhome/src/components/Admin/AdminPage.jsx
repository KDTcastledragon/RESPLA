import axios from 'axios';
import './AdminPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminPage() {

    const navigator = useNavigate();

    const admcode = sessionStorage.getItem('admcode');
    const authority = sessionStorage.getItem('authority');


    console.log(admcode);

    const logout = () => {
        sessionStorage.clear();
        navigator('/AdminLogInPage');
        window.location.reload();
    }

    return (
        <>
            {admcode === 's9811' || admcode === 'a377' || admcode === 'd14' ?
                <div className='AdminPageContainer'>
                    <div className='adminInFormation'>
                        <div className='adminAuthority'>
                            <span>{authority === 'superAdmin' && admcode === 's9811' ? '최고 관리자'
                                : admcode === 'a377' ? '중간 관리자'
                                    : admcode === 'd14' ? '일반 관리자'
                                        : '오류'}</span>
                        </div>
                        <button onClick={logout}>로그아웃</button>
                    </div>

                    {authority === 'superAdmin' && admcode === 's9811' ?
                        <div className='adminManagement'>
                            <button>관리자 목록</button>
                            <button>카페 관리 기록</button>
                            <button>코드</button>
                        </div>
                        : null
                    }
                </div>

                :

                <div>허가되지 않은 접근입니다.</div>
            }
        </>
    );
}

export default AdminPage;
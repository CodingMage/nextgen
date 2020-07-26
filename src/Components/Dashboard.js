import React from 'react';
import { SearchOutlined, NotificationsOutlined } from '@material-ui/icons';
import profile from '../img/profile-1.jpg'

const Dashboard = () => {
    return (
        <div className='dashboard'>

            <div className="topbar">
                <SearchOutlined className='search' color='action' />
                <NotificationsOutlined color='action' />
                <img src={profile} alt="profile" />
                {/* <h1>dash</h1> */}

            </div>
        </div>
    );
};

export default Dashboard;
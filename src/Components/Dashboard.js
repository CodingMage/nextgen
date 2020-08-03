import React from 'react';
import { SearchOutlined, NotificationsOutlined, SyncOutlined, } from '@material-ui/icons';
import profile from '../img/profile-1.jpg';
import { ReactComponent as Cart } from '../svgs/cart.svg';

import ReportBox from './ReportBox'



const Dashboard = () => {

    return (
        <div className='dashboard'>

            <div className="topbar">
                <SearchOutlined className='search' color='action' />
                <NotificationsOutlined color='action' />
                <img src={profile} alt="profile" />
                {/* <h1>dash</h1> */}

            </div>
            <div className="intro">
                <h2>General Report</h2>
                <p><SyncOutlined /> Reload Data</p>

            </div>
            <div className="report__grid">
                <ReportBox
                    icon={<Cart />}
                    percent='33%'
                    num='4.510'
                    des='New Items'
                    indicatorBg='#91C714' />
                <ReportBox
                    icon={<Cart />}
                    percent='33%'
                    num='4.510'
                    des='New Items'
                    indicatorBg='#91C714' />
                <ReportBox
                    icon={<Cart />}
                    percent='33%'
                    num='4.510'
                    des='New Items'
                    indicatorBg='#D32929' />
                <ReportBox
                    icon={<Cart />}
                    percent='33%'
                    num='4.510'
                    des='New Items'
                    indicatorBg='#91C714' />
                {/* <ReportBox />
                <ReportBox /> */}


            </div>

        </div>
    );
};

export default Dashboard;
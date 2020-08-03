import React from 'react';
import { ExpandLessOutlined } from '@material-ui/icons';



const ReportBox = ({ icon, percent, num, des, indicatorBg }) => {
    return (
        <div className="box-container">
            <div className='reportbox'>
                <div className="top">
                    {icon}
                    <div className="top_indicator" style={{ backgroundColor: indicatorBg }}>
                        <span>{percent} <ExpandLessOutlined /></span>
                    </div>
                </div>
                <div className="reportbox_num">{num}</div>
                <div className="reportbox_des">{des}</div>
            </div>

        </div>
    );
};

export default ReportBox;
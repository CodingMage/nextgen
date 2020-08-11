import React from 'react';

const ListDropdown = ({ Icon, title }) => {
    return (
        <div className='listdropdown'>
            <Icon />
            <p>{title}</p>
        </div>
    );
};

export default ListDropdown;
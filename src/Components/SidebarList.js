import React, { useState } from 'react';
import { ReactComponent as Up } from '../svgs/up.svg';


const SidebarList = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
        console.log('shown');
    }
    return (
        <div className='sidebarlist' >
            <div className="sidebarlist__heading" onClick={handleShow}>
                <props.Icon className='sidebarlist__icon' />
                <p>{props.title}</p>
                {props.drop ? <Up className={`sidebarlist__arrow ${show && 'invert'}`} /> : ''}




            </div>
            <div className={` ${props.drop && 'listdrop'} ${show && 'show'}`}>
                {props.children}
            </div>
        </div>
    );
};

export default SidebarList;
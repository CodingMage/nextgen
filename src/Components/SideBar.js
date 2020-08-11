import React, { useState } from 'react';
// import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
// import { Mess } from '@material-ui/icons';
import { ReactComponent as LogoBrand } from '../svgs/logo1.svg';
import { ReactComponent as Box } from '../svgs/box.svg';
import { ReactComponent as Inbox } from '../svgs/inbox.svg';
import { ReactComponent as File } from '../svgs/file.svg';
import { ReactComponent as Pos } from '../svgs/pos.svg';
import { ReactComponent as Chat } from '../svgs/chat.svg';
import { ReactComponent as Post } from '../svgs/post.svg';
import { ReactComponent as Crud } from '../svgs/crud.svg';
import { ReactComponent as Users } from '../svgs/users.svg';
import { ReactComponent as Profile } from '../svgs/profile.svg';
import { ReactComponent as Pages } from '../svgs/pages.svg';
import { ReactComponent as Component } from '../svgs/inbox.svg';
import { ReactComponent as Forms } from '../svgs/forms.svg';
import { ReactComponent as Widget } from '../svgs/widget.svg';
import { ReactComponent as Home } from '../svgs/dashboard.svg';
import { ReactComponent as Menu } from '../svgs/menu.svg';
import { ReactComponent as Wave } from '../svgs/wave.svg';
import { ReactComponent as Up } from '../svgs/up.svg';


// import useDropdown from './useDropdown';
// import Dropdown from './Dropdown';








// import { Box, LogoBrand } from '../svgs';


// import { FaHome } from 'react-icons/fa';
// import logo1 from '../svgs/logo1.svg';

function SideBar() {

    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);
    const [open6, setOpen6] = useState(true);

    // const { isShowing1, isShowing, toggle, toggle1, } = useDropdown();




    const handleOpen = () => {
        setOpen(!open)
        console.log('opren');
    }
    const handleOpen1 = () => {
        setOpen1(!open1)
        invertarrow();


    }
    const handleOpen2 = () => {

        setOpen2(!open2)

    }
    const handleOpen3 = () => {

        setOpen3(!open3)

    }
    const handleOpen4 = () => {

        setOpen4(!open4)

    }
    const handleOpen5 = () => {

        setOpen5(!open5)

    }
    const handleOpen6 = () => {

        setOpen6(!open6);
        //     const arrows = document.querySelector('.arrowup')
        // //     arrows.classList.toggle('testdom')
        //     arrows.classList.toggle('testdom')
        //     console.log(arrows)

        invertarrow();

    }
    const invertarrow = () => {
        const arrows = document.querySelectorAll('.arrowup')
        const arr = document.querySelector('.drop-btn')

        // arrows.classList.toggle('testdom')


        arrows.forEach(function (arrow) {

            arr.addEventListener('click', function () {
                // console.log(arrow)
                arrow.classList.toggle('testdom')

            })

            // for (let arrow of arrows) {
            //     // console.log(arrow)
            // arrows.addEventListener('click', function () {
            //     // console.log(arrow)
            //     arrows.classList.toggle('testdom')

        })
        // }



        // console.log(arrows)
    }


    return (
        <div className='side'>
            <div className="sep">

                <LogoBrand className='side_brand' />
                {/* <img src={logo1} alt="brand" /> */}

                <Menu className='side_icon' onClick={handleOpen} />
            </div>

            <div className="move">

                <ul className={`side__menu ${open ? '' : 'open'}`}>
                    <li><Home /> <p>Dashboard</p> </li>
                    <li className='drop' >

                        <div className='drop-btn' onClick={handleOpen1}><Box />  <span>Menu Layout</span> <Up className='arrowup' /></div>
                        <ul className={`dropdown ${open1 ? '' : 'open1'}`}>
                            <li><Wave /> <span>Side Menu</span></li>
                            <li><Wave /> <span>Simple Menu</span></li>
                            <li><Wave /> <span>Top Menu</span></li>

                        </ul>

                    </li>

                    <li><Inbox />  <p>Inbox</p> </li>
                    <li><File />  <p>File Manager</p> </li>
                    <li><Pos />  <p>Point of Sales</p> </li>
                    <li><Chat /> <p>Chat</p> </li>
                    <li><Post /> <p>Post</p> </li>

                    <li className="divider"></li>
                    {/* <li ><Crud />  <p> Crud</p></li> */}
                    <li className='drop' >

                        <div className='drop-btn' onClick={handleOpen6}><Crud />  <span>Crud</span> <Up className='arrowup' /></div>
                        <ul className={`dropdown ${open6 ? '' : 'open6'}`}>
                            <li><Wave /> <span>Data List</span></li>
                            <li><Wave /> <span>Form</span></li>


                        </ul>

                    </li>



                    <li className='drop' >

                        <div className='drop-btn' onClick={handleOpen2}><Users />  <span>Users</span> <Up className='arrowup' /></div>
                        <ul className={`dropdown ${open2 ? '' : 'open2'}`}>
                            <li><Wave /> <span>Layout 1</span></li>
                            <li><Wave /> <span>Layout 2</span></li>
                            <li><Wave /> <span>Layout 3</span></li>

                        </ul>

                    </li>
                    <li className='drop' >

                        <div className='drop-btn' onClick={handleOpen3}><Profile />  <span>Profile</span> <Up className='arrowup' /></div>
                        <ul className={`dropdown ${open3 ? '' : 'open3'}`}>
                            <li><Wave /> <span>Overview 1</span></li>
                            <li><Wave /> <span>Overview 2</span></li>
                            <li><Wave /> <span>Overview 3</span></li>

                        </ul>

                    </li>
                    <li className='drop' >

                        <div className='drop-btn' onClick={handleOpen4}><Pages />  <span>Pages</span> <Up className='arrowup' /></div>
                        <ul className={`dropdown ${open4 ? '' : 'open4'}`}>
                            <li><Wave /> <span>Wizards</span></li>
                            <li><Wave /> <span>Blog</span></li>
                            <li><Wave /> <span>Pricing</span></li>
                            <li><Wave /> <span>Invoice</span></li>
                            <li><Wave /> <span>FAQ</span></li>
                            <li><Wave /> <span>Login</span></li>
                            <li><Wave /> <span>Register</span></li>
                            <li><Wave /> <span>Error Page</span></li>
                            <li><Wave /> <span>Update Profile</span></li>
                            <li><Wave /> <span>Change Password</span></li>


                        </ul>

                    </li>

                    <li className="divider"></li>
                    <li className='drop' >

                        <div className='drop-btn' onClick={handleOpen5}><Component />  <span>Component</span> <Up className='arrowup' /></div>
                        <ul className={`dropdown ${open5 ? '' : 'open5'}`}>
                            <li><Wave /> <span>Grid</span></li>
                            <li><Wave /> <span>Accordion</span></li>
                            <li><Wave /> <span>Button</span></li>
                            <li><Wave /> <span>Modal</span></li>
                            <li><Wave /> <span>Alert</span></li>
                            <li><Wave /> <span>Progress Bar</span></li>
                            <li><Wave /> <span>Tooltip</span></li>
                            <li><Wave /> <span>Dropdown</span></li>
                            <li><Wave /> <span>Toast</span></li>
                            <li><Wave /> <span>Typography</span></li>
                            <li><Wave /> <span>Icon</span></li>
                            <li><Wave /> <span> Loading Icon</span></li>




                        </ul>

                    </li>
                    <li><Forms />  <p>Forms</p> </li>
                    <li><Widget /> <p>Widget</p></li>



                </ul>
            </div>


        </div >
    );
};

export default SideBar;
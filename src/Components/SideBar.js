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





// import { Box, LogoBrand } from '../svgs';


// import { FaHome } from 'react-icons/fa';
// import logo1 from '../svgs/logo1.svg';

function SideBar() {

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open)
        console.log('opren');
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
                    <li><Box />  <p>Menu Layout</p> </li>
                    <li><Inbox />  <p>Inbox</p> </li>
                    <li><File />  <p>File Manager</p> </li>
                    <li><Pos />  <p>Point of Sales</p> </li>
                    <li><Chat /> <p>Chat</p> </li>
                    <li><Post /> <p>Post</p> </li>

                    <li className="divider"></li>
                    <li><Crud />  <p> Crud</p></li>
                    <li><Users />  <p>Users</p> </li>
                    <li><Profile />  <p>Profile</p> </li>
                    <li><Pages />  <p>Pages</p> </li>

                    <li className="divider"></li>
                    <li><Component />  <p>Components</p> </li>
                    <li><Forms />  <p>Forms</p> </li>
                    <li><Widget /> <p>Widgets</p> </li>


                </ul>
            </div>


        </div>
    );
};

export default SideBar;
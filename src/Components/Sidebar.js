import React, { useState } from 'react';
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
import SidebarList from './SidebarList';
import ListDropdown from './ListDropdown';
import { ReactComponent as Wave } from '../svgs/wave.svg';


function Sidebar() {

    const [open, setOpen] = useState(false);

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

            <div className={`move ${open ? '' : 'open'}`}>
                <SidebarList
                    title='Dashboard'
                    Icon={Home}

                />
                <SidebarList
                    title='Menu Layout'
                    Icon={Box}
                    drop

                >

                    <ListDropdown
                        Icon={Wave}
                        title='Side Menu'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Simple Menu'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Top Menu'
                    />
                </SidebarList>
                <SidebarList
                    title='Inbox'
                    Icon={Inbox}
                />
                <SidebarList
                    title='File Manager'
                    Icon={File}
                />
                <SidebarList
                    title='Point of Sales'
                    Icon={Pos}
                />
                <SidebarList
                    title='Chat'
                    Icon={Chat}
                />
                <SidebarList
                    title='Post'
                    Icon={Post}
                />
                <div className="divider"></div>


                <SidebarList
                    title='Crud'
                    Icon={Crud}
                    drop
                >
                    <ListDropdown
                        Icon={Wave}
                        title='Data List'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Form'
                    />

                </SidebarList>
                <SidebarList
                    drop
                    title='Users'
                    Icon={Users}
                >
                    <ListDropdown
                        Icon={Wave}
                        title='Layout 1'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Layout 2'
                    />

                    <ListDropdown
                        Icon={Wave}
                        title='Layout 3'
                    />


                </SidebarList>
                <SidebarList
                    drop
                    title='Profile'
                    Icon={Profile}
                >
                    <ListDropdown
                        Icon={Wave}
                        title='Overview 1'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Overview 2'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Overview 3'
                    />
                </SidebarList>
                <SidebarList
                    drop
                    title='Pages'
                    Icon={Pages}
                >
                    <ListDropdown
                        Icon={Wave}
                        title='Wizards'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Blog'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Pricing'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Invoice'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='FAQ'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Login'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Register'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Error Page'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Update profile'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Change Password'
                    />


                </SidebarList>
                <div className="divider"></div>

                <SidebarList
                    drop
                    title='Components'
                    Icon={Component}
                >
                    <ListDropdown
                        Icon={Wave}
                        title='Grid'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Accordion'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Button'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Modal'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Alert'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Progress Bar'
                    />

                    <ListDropdown
                        Icon={Wave}
                        title='Tooltip'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Dropdown'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Toast'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Typography'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Icon'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Loading Icon'
                    />
                </SidebarList>
                <SidebarList
                    drop
                    title='Forms'
                    Icon={Forms}
                >
                    <ListDropdown
                        Icon={Wave}
                        title='Regular Form'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='DatePicker'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Select2'
                    />

                    <ListDropdown
                        Icon={Wave}
                        title='File Upload'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Wysiwyg Editor'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Validation'
                    />
                </SidebarList>
                <SidebarList
                    drop
                    title='Widget'
                    Icon={Widget}
                >
                    <ListDropdown
                        Icon={Wave}
                        title='Chart'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Slider'
                    />
                    <ListDropdown
                        Icon={Wave}
                        title='Image Zoom'
                    />
                </SidebarList>

            </div>


        </div >
    );
};

export default Sidebar;
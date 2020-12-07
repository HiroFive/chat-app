import React, { useState } from 'react'
import {Tab, Nav} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { useAuth } from '../../contexts/AuthContext';
import Contacts from './SideBar/Contacts';
import Conversations from './SideBar/Conversations';

const CONVERSATIONS_KEY = 'conversation';
const CONTACTS_KEY = 'contacts';

export default function SideBar() {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const { currentUser } = useAuth()

    return (
        <div style ={{width: '250px'}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey ={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey ={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='border-right border-left overflow-auto flex-grow-1'>
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations/>
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts/>
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border-top border-right border-left small'>
                  Yor Id:<span className='text-muted'>{currentUser.uid}</span>  
                </div>
            </Tab.Container>

        </div>
    )
}

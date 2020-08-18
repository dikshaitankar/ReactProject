import React, { useState } from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import Todo from '../Container/Todo';
import ContactForm from '../Container/ContactForm';
import classnames from 'classnames';

const TabsList = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }} >
                        Todo List
                     </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }} >
                        Contact Form
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <br />
                    <Row>
                        <Col sm="12">
                            <Todo></Todo>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                <br/>
                    <Row>
                        <ContactForm></ContactForm>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default TabsList;
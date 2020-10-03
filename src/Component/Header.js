import React from 'react';

import TabsList from './Tabs';
import { Route, Link } from 'react-router-dom';
import ContactForm from '../Container/ContactForm';

const Header = () => {
    return (
        <div>
            <header>
                <ul color="light" light expand="md">
                    <li><Link to="/">Contact Form</Link></li>

                    <li><Link to={{
                        pathname: "/tabs",
                        hash: "#id"
                    }}>Tabs</Link></li>
                </ul>
            </header>
            {/* <TabsList></TabsList> <ContactForm></ContactForm>*/}
            <Route path="/" exact component={ContactForm} />
            <Route path="/tabs" exact component={TabsList} />

        </div>
    )
}

export default Header;
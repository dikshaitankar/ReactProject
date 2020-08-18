import React from 'react';
import './App.css';
import TabsList from './Component/Tabs';
import { 
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
      
      <TabsList></TabsList>
      
    </div>
  );
}

export default App;

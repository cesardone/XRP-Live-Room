import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

export default (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color='faded' light>
        {/* Title */}
        <NavbarBrand href='/' className='mr-auto'>
          XRP Lobby
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem>
              <NavLink href='/'>Login</NavLink>
              <NavLink href='/lobby'>Lobby</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

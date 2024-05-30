import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Nav.Link as={Link} to={to} active={isActive}>
      {children}
    </Nav.Link>
  );
};

export default CustomLink;
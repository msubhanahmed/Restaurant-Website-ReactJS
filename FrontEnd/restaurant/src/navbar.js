import React from 'react';
import { Link } from 'react-router-dom';


const TopNavigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <Link className='navbar-brand ml-3 text-white' to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link className='nav-link navbar-link text-white' to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link navbar-link text-white' to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link navbar-link text-white' to="/account">My Account</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to="/">Home</Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Link to="/login">Login</Link>
                </Nav.Item>
                <Nav>
                  <Link to="/cart">Cart</Link>
                </Nav>
              </Nav>
          </Container>
        </Navbar> */}
    </>
  );
};

export default TopNavigation;
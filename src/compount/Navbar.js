import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
        <img src="https://repository-images.githubusercontent.com/301684261/b94f3280-083b-11eb-84a9-dc749901f069" alt="" width="150" height="90"/>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link ' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link ' to='/about'>
              About
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar


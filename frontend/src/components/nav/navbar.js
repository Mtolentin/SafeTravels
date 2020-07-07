import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="loggedin-links">
          <Link className='loggedin-btn' to={'/products'}>See all Products</Link>
          <Link className='loggedin-btn' to={'/posts'}>Write a Comment</Link>
          <button className='loggedin-btn logout-btn' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="links">
          <Link className='login-btn' to={'/signup'}>Sign Up</Link>
          <Link className='login-btn' to={'/login'}>Log In</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <h1><Link id="title" to='/'>Our Choices Matter</Link></h1>
          {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
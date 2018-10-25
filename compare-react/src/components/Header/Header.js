import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <nav className="navbar has-shadow">
     <div className="container">
      <div className="navbar-brand">
        <div className="navbar-start">
          <a className="navbar-item">MyCompany</a>        
        </div>

        <div className={'navbar-burger burger'+menuActive} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        
      </div>      <div className={'navbar-end navbar-menu'+menuActive}>

      <Link to="/" className = "nav-item r-item">Home</Link>
      <Link to="/faq" className = "nav-item r-item">Features</Link>
      <Link to="/faq" className = "nav-item r-item">About</Link>
      <Link to="/faq" className = "nav-item r-item">FAQ</Link>

      <div className="navbar-item">
            <p className="control">
              <a className="button is-primary is-outlined">
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Join now!</span>
              </a>
            </p>
          </div>
        </div>
      </div>
   </nav>
    );
  }
}

export default Header;

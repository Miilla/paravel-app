import * as React from 'react';
import './Header.css';

class Header extends React.Component {
    public render() {
      return (   
          <div className="app-header">
            <div className="header-left">Our Story</div>
            <div className="header-right">Shop All</div>
            <div className="header-center">PARAVEL</div>
            <div className="header-left">Shop Kits</div>
            <div className="header-right">
                <div className="header-right-inside">My Account</div> 
                <div className="header-right-inside">Cart</div> 
            </div>
          </div>
      );
    }
  }
  
  export default Header;
  
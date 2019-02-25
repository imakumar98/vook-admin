import React, { Component } from 'react';
import Link from 'next/link';
import NavButton from './NavButton';


 class SideNavbar extends Component {
  render() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <div className="nav-link">
                        <div className="user-wrapper">
                            <div className="profile-image">
                                <img src="/static/img/faces/profile.jpg" alt="profile image" />
                            </div>
                            <div className="text-wrapper">
                                <p className="profile-name">Ashwani</p>
                                <div>
                                    <small className="designation text-muted">Developer</small>
                                    <span className="status-indicator online"></span>
                                </div>
                            </div>
                        </div>
                        <Link href="/order/add"><a className="btn btn-success btn-block">ADD ORDER &nbsp;<i className="mdi mdi-plus"></i></a></Link>
                    </div>
                </li>
                <NavButton text="Dashboard" iconClassName="menu-icon mdi mdi-television" to="/"/>
                <NavButton text="Books" iconClassName="menu-icon mdi mdi-book" to="/books"/>
                <NavButton text="Orders" iconClassName="menu-icon mdi mdi-receipt" to="/orders"/>
                <NavButton text="Manage Discounts" iconClassName="menu-icon fa fa-percent" to="/manage-discount"/>
                <NavButton text="Chat" iconClassName="menu-icon fa fa-envelope" to="/chat"/>
                <NavButton text="Notes" iconClassName="menu-icon fa fa-sticky-note-o" to="/notes"/>
                <NavButton text="My Account Settings" iconClassName="menu-icon fa fa-gear" to="/account"/>
                <NavButton text="Logout" iconClassName="menu-icon fa fa-sign-out" to="/logout"/>
                
                
            </ul>
        </nav>
    )
  }
}

export default SideNavbar;

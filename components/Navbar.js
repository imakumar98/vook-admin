import React, { Component } from 'react';
import Link from 'next/link';
import $ from 'jquery';


 class Navbar extends Component {

    componentDidMount(){
        $('[data-toggle="offcanvas"]').on("click", function() {
            $('.sidebar-offcanvas').toggleClass('active')
        });
    }
  render() {
    return (
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                <Link  href="/">
                    <a className="navbar-brand brand-logo">
                        <img src="/static/img/logo.svg" alt="logo" />
                    </a>
                </Link>
                <Link  href="/">
                    <a className="navbar-brand brand-logo-mini">
                        <img src="/static/img/logo-mini.svg" alt="logo" />
                    </a>
                </Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center">
                
                <ul className="navbar-nav navbar-nav-right">
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                            <i className="mdi mdi-bell"></i>
                            <span className="count">2</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <a className="dropdown-item">
                                <p className="mb-0 font-weight-normal float-left">You have 2 new notifications
                                </p>
                                <span className="badge badge-pill badge-warning float-right">View all</span>
                            </a>
                            
                            
                            <div className="dropdown-divider"></div>
                            <Link href="/chat" >
                                <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-warning">
                                    <i className="mdi mdi-comment-text-outline mx-0"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-medium text-dark">Unread Messages</h6>
                                    {/* <p className="font-weight-light small-text">
                                    Private message
                                    </p> */}
                                </div>
                                </a>
                                
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="/orders" >
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                        <i className="mdi mdi-receipt mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-medium text-dark">New Order Added</h6>
                                        {/* <p className="font-weight-light small-text">
                                        2 days ago
                                        </p> */}
                                    </div>
                                </a>
                                
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item d-none d-xl-inline-block">
                        <a className="nav-link" aria-expanded="false">
                            <span className="profile-text">Hello, Ashwani</span>
                            <img className="img-xs rounded-circle" src="/static/img/faces/profile.jpg" alt="Profile image" />
                        </a>
                        
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    )
  }
}

export default Navbar;

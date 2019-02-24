import React, { Component } from 'react'

import Meta from './Meta';
import Navbar from './Navbar';
import SideNavbar from './SideNavbar';
import Footer from './Footer';

class Page extends Component {
  render() {
    return (
      <div>
        <Meta/>
        <Navbar />
        <div className="container-fluid page-body-wrapper"> 
          <SideNavbar />
          <div className="main-panel">
            <div className="content-wrapper">
              
              {this.props.children}
            </div>
            <Footer />
          </div>
        </div>
        
      </div>
      
    )
  }
}

export default Page

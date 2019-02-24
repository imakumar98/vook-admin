import React from 'react';
import Link from 'next/link';

function NavButton(props) {
  return (
    <li className="nav-item">
        <Link  href={props.to}>
            <a className="nav-link">
            <i className={props.iconClassName}></i>
            <span className="menu-title">{props.text}</span>
            </a>
            
        </Link>
    </li>
  )
}

export default NavButton;

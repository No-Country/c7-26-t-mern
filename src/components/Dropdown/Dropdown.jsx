import React from 'react';
import './dropdown.css'

const Dropdown = (props) => {
  return (
    <div className='dropwdown'>
        <ul className='dropdown-menu'>{props.children}</ul>
    </div>
  )
}

export const DropdownItem = (props) => {
    return(
        <li className='dropdown-item'>
            <a href="/#" className='icon-button'>
                {props.icon}
            </a>
        </li>
    )
}

export default Dropdown
import React, { useState, useRef } from 'react'
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import { GiCupcake, GiPizzaSlice } from 'react-icons/gi'

function Category() {
  return (
    <Navbar>
      <NavItem icon= {<GiCupcake /> }>
        <DropdownMenuSlatko />   
      </NavItem> 
      <NavItem icon= {<GiPizzaSlice />}>
        <DropdownMenuSlano /> 
      </NavItem>
    </Navbar>
  )
}

function DropdownMenuSlatko() {
  
  function DropdownItem(props) {
    return(
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>

        { props.children }

        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    ) 
  }
  
  return (
    <div className='dropdown'>
      <DropdownItem>Torte</DropdownItem>
      <DropdownItem>Kolači</DropdownItem>
      <DropdownItem>Palačinke</DropdownItem>
      <DropdownItem>Ostalo</DropdownItem>
    </div>
  )
}

function DropdownMenuSlano() {
  
  function DropdownItem(props) {
    return(
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>

        { props.children }

        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    ) 
  }
  
  return (
    <div className='dropdown'>
      <DropdownItem>Variva</DropdownItem>
      <DropdownItem>Kiflice</DropdownItem>
      <DropdownItem>Kruh</DropdownItem>
      <DropdownItem>Ostalo</DropdownItem>
    </div>
  )
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children } </ul>
    </nav>
  )
}

function NavItem(props) {

  const [open, setOpen] = useState(false);


  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(false)}>
    {props.icon} 
      </a>

      {open && props.children}
    </li>
  )
}

export default Category
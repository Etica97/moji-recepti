import React, { useState, useRef } from 'react'
import { useOnHoverOutside } from "../hooks/useOnHoverOutside"
import { GiCupcake, GiPizzaSlice } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'


function Dropdown() {
  return (
    <Navbar>
      <NavItem icon = {<GiCupcake />} name = 'SLATKO' >
        <DropdownMenuSlatko />   
      </NavItem> 
      <NavItem icon = {<GiPizzaSlice />} name = 'SLANO'>
        <DropdownMenuSlano /> 
      </NavItem>  
    </Navbar>
  )
}
/*davidova proba
function DropdownMenu(props) {
  
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
      {props.list.forEach(element => {
        <DropdownItem>nekiitekst</DropdownItem>
      })};
    </div>
  )
}*/

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
      <NavLink to={'/Torte'}><DropdownItem>Torte</DropdownItem></NavLink>
      <NavLink to={'/Kolaci'}><DropdownItem>Kolači</DropdownItem></NavLink>
      <NavLink to={'/Palacinke'}><DropdownItem>Palačinke</DropdownItem></NavLink>
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
      <NavLink to={'/Variva'}><DropdownItem>Variva</DropdownItem></NavLink>
      <NavLink to={'/Kiflice'}><DropdownItem>Kiflice</DropdownItem></NavLink>
      <NavLink to={'/Kruh'}><DropdownItem>Kruh</DropdownItem></NavLink>
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
    <li className='nav-item' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <a href='#' className='icon-button' >
    {props.icon}{props.name} 
      </a>

      {open && props.children}
    </li>
  )
}

export default Dropdown
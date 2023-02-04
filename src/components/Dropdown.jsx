import React, { useState, useRef } from 'react'
import { useOnHoverOutside } from "../hooks/useOnHoverOutside"
import { GiCupcake, GiPizzaSlice } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'


function Dropdown() {
  return (
    <Navbar>
      <NavItem icon = {<GiCupcake />} name = 'SLATKO' >
        <DropdownMenuSweet />   
      </NavItem> 
      <NavItem icon = {<GiPizzaSlice />} name = 'SLANO'>
        <DropdownMenuSalty /> 
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

function DropdownMenuSweet() {
  
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
      <NavLink to={'/Cakes'}><DropdownItem>Torte</DropdownItem></NavLink>
      <NavLink to={'/Cookies'}><DropdownItem>Kolači</DropdownItem></NavLink>
      <NavLink to={'/Pancakes'}><DropdownItem>Palačinke</DropdownItem></NavLink>
    </div>
  )
}

function DropdownMenuSalty() {
  
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
      <NavLink to={'/Stew'}><DropdownItem>Variva</DropdownItem></NavLink>
      <NavLink to={'/Rolls'}><DropdownItem>Kiflice</DropdownItem></NavLink>
      <NavLink to={'/Bread'}><DropdownItem>Kruh</DropdownItem></NavLink>
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
import { GiCupcake, GiPizzaSlice } from 'react-icons/gi'
import styled from 'styled-components'
import { useState, useRef } from 'react'
import { useOnHoverOutside } from './../hooks/useOnHoverOutside'
import MenuSlatko from './MenuSlatko'
import MenuSlano from './MenuSlano'
import React from 'react'

function Category() {
    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

    // Function to close dropdown
    const closeHoverMenu = () => {
      setMenuDropDownOpen(false);
    };

    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <List>
 
      <div ref={dropdownRef}>
          <Button
            onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
          >
            <GiCupcake /> SLATKO
          </Button>

          {isMenuDropDownOpen && <MenuSlatko />} 
          
      </div>
      

      <div ref={dropdownRef}>
          <Button
            onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
          >
            <GiPizzaSlice /> SLANO
          </Button>

          {isMenuDropDownOpen && <MenuSlano />} 
          
      </div> 
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  font-size: 25px;
  background: rgb(84, 84, 84);
  border: 2px solid black;
  border-radius: 10px

`;

const Button = styled.button`
  font-color: red;

`;

export default Category
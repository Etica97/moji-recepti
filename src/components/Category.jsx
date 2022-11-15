import { GiCupcake, GiPizzaSlice } from 'react-icons/gi'
import styled from 'styled-components'

import React from 'react'

function Category() {
  return (
    <List>
        <div>
            <h4><GiCupcake /> SLATKO</h4>
        </div>

        <div>
            <h4><GiPizzaSlice /> SLANO</h4>
        </div>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    font-size: 25px;

`;
export default Category
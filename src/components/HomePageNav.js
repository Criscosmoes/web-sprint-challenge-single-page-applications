import React from 'react'; 
import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 


const StyledHomePageNav = styled.div`


& {
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 5vh; 
    background: black; 
}

div {
    font-size: 2rem; 
    color: white; 

}

`



const HomePageNav = () => {


    return (
        <StyledHomePageNav>
            <Link to="/">
                <div>Home</div>
            </Link>
        </StyledHomePageNav>
    )
}

export default HomePageNav; 
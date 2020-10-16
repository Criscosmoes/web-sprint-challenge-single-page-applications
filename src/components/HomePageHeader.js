import React from 'react'; 
import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 


const StyledHomePageHeader = styled.div`

& {
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 55vh; 
    background-image: url(${'https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}); 
    background-size: cover; 
    background-position: 20% 40%; 

}


.btn {
    padding: .5%; 
    font-size: 1.8rem; 
    width: 100%; 
    cursor: pointer;
}

.btn:hover {
    background: black; 
    color: white; 
}


`

const HomePageHeader = () => {


    return (
        <StyledHomePageHeader>
            <Link to="/pizza">
                <button className="btn">Click for Pizza!</button>
            </Link>
        </StyledHomePageHeader>
    )
} 


export default HomePageHeader; 
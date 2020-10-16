import React from 'react'; 
import styled from 'styled-components'; 


const StyledConfirmation = styled.div`


.picture {

    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 60vh; 
    background-image: url(${'https://images.unsplash.com/photo-1428895009712-de9e58a18409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}); 
    background-size: cover;
    background-position: 20% 40%; 
}



h1 {
    color: white; 
    font-size: 6.5rem; 
}

`

const Confirmation = () => {


    return (
        <StyledConfirmation>
            <div className="picture">
                <h1>Congrats! Pizza is on its way!</h1>
            </div>
        </StyledConfirmation>
    )
}


export default Confirmation; 
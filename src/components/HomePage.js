import React from 'react'; 
import styled from 'styled-components'; 
import HomePageHeader from './HomePageHeader';
import HomePageFooter from './HomePageFooter';
import HomePageNav from './HomePageNav';

const StyledHomePage = styled.div`

& {
}

`


const HomePage = () => {


    return (
        <StyledHomePage>
            <HomePageNav /> 
            <HomePageHeader /> 
            <HomePageFooter /> 
        </StyledHomePage>
    )
}



export default HomePage; 
import React from 'react'; 
import styled from 'styled-components'; 


const StyledHomePageFooter = styled.div`

& {
    margin-top: 2%;
}


img {
    width: 50%; 
}


.item {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    width: 100%; 
}

h2 {
    text-align: center; 
    font-size: 5rem; 
}

img, h3, p {
    margin: 1%; 
    width: 50%; 
}

.food {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 30%; 
    margin: 1%; 
}
`


const HomePageFooter = () => {


    return (
        <StyledHomePageFooter>
             <h2>Food Delivery in Ontario</h2>
             <div className="item">
                    <div className="food">
                        <img src='https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80' alt="pizza"></img>
                        <h3>Pizza</h3>
                        <p>- Fast Food - Pizza</p>
                        <h3>20-30 min</h3>
                        <h3>$5.99 Fee</h3>
                    </div>

                    <div className="food">
                        <img src='https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt="burger"></img>
                        <h3>McDonalds</h3>
                        <p>- Fast Food - Burger</p>
                        <h3>20-30 min</h3>
                        <h3>$3.99 Fee</h3>
                 </div>

                 <div className="food">
                        <img src='https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt="ramen"></img>
                        <h3>Ramen</h3>
                        <p>- Spicy Noodles</p>
                        <h3>20-30 min</h3>
                        <h3>$6.99 Fee</h3>
                 </div>
             </div>
        </StyledHomePageFooter>
    )
}



export default HomePageFooter; 
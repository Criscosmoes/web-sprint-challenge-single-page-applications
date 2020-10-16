import React from 'react';
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';  


const StyledPizzaFormPage = styled.div`


& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

.container {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    margin: 2%; 
    height: 80vh; 
    width: 60%; 
}


.name {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    text-align: center; 
    width: 70%; 
}


label {
    margin: 7%; 
    font-size: 1.6rem; 
}

.toppings {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
}

button {
    margin: 8%; 
    width: 100%;
    cursor: pointer;
}

button:hover {
    background: black; 
    color: white; 
}

p {
    margin: 2%;
    color: red; 
}

`


const PizzaFormPage = ({onInputChange, values, buttonDisabled, errors}) => {

    return (
        <StyledPizzaFormPage>
            <form className="container">
                <div className="name">
                    <label>
                        Name:
                        <input type="text" name="name" onChange={onInputChange} value={values.name} /> 
                        {errors.name.length !== 0 && <p>{errors.name}</p>}
                    </label>

                    <label>
                        Pizza Size:
                        <select name='pizzaSize' onChange={onInputChange} value={values.pizzaSize}>
                            <option>--select option--</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select> 
                    </label>

                    <div>
                        <h2>Toppings</h2>
                        <div className="toppings">

                            <label>
                            Pepperoni
                            <input type="checkbox" name="pepperoni" onChange={onInputChange} value={values.pepperoni} /> 
                            </label>

                            <label>
                            Pineapple
                            <input type="checkbox" name="pineapple" onChange={onInputChange} value={values.pineapple} /> 
                            </label>

                            <label>
                            Ham
                            <input type="checkbox" name="ham" onChange={onInputChange} value={values.ham} /> 
                            </label>

                            <label>
                            Chicken
                            <input type="checkbox" name="chicken" onChange={onInputChange} value={values.chicken} /> 
                            </label>

                        </div>
                    </div>

                    <label>
                        Special Instructions:
                        <input type="text" name="special" onChange={onInputChange} value={values.special} /> 
                    </label>

                    <Link to="/pizza/confirmation">
                        <button type="submit" disabled={buttonDisabled}>Sumbit Pizza!</button>
                    </Link>
                    
                </div>
            </form>
        </StyledPizzaFormPage>
    )
}

export default PizzaFormPage; 
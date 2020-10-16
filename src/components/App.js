import React, {useState} from 'react'; 
import './App.css'; 
import HomePage from './HomePage';
import {Route, Switch} from 'react-router-dom'; 
import HomePageNav from './HomePageNav';
import PizzaFormPage from './PizzaFormPage';
import * as yup from 'yup'; 



const App = () => {

    const initialValues = {
        name: '', 
        pizzaSize: '', 
        pepperoni: false, 
        pineapple: false, 
        ham: false, 
        chicken: false,
        special: ''
    }


    const [values, setValues] = useState(initialValues); 
    const [errors, setErrors] = useState({...initialValues,
    pepperoni: '', 
    pineapple: '', 
    ham: '', 
    chicken: '', 
    })


    const onInputChange = e => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; 
    

        setValues({
            ...values,
            [e.target.name]: value
        })

    }


    const onFormSubmit = (e) => {
        e.preventDefault(); 


        setValues(initialValues); 
    }




    let formSchema = yup.object().shape({
        name: yup.string().required('Please provide name').min(2, 'Name must be atleast 2 characters long'), 

        pizzaSize: yup.string().required('Please select a size'), 

        pepperoni: yup.boolean(), 

        pineapple: yup.boolean(),

        ham: yup.boolean(), 

        chicken: yup.boolean(), 

        special: yup.string() 

    })



/*     const initialValues = {
        name: '', 
        pizzaSize: '', 
        pepperoni: false, 
        pineapple: false, 
        ham: false, 
        chicken: false
    } */










    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <HomePage /> 
                </Route>

                <Route path="/pizza">
                    <HomePageNav />
                    <PizzaFormPage onInputChange={onInputChange} values={values}/> 
                </Route>
            </Switch>
        </div>
    )
}


export default App; 
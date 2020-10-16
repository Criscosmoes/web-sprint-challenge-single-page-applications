import React, {useEffect, useState} from 'react'; 
import './App.css'; 
import HomePage from './HomePage';
import {Route, Switch} from 'react-router-dom'; 
import HomePageNav from './HomePageNav';
import PizzaFormPage from './PizzaFormPage';
import * as yup from 'yup'; 
import Confirmation from './Confirmation';



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
    const [buttonDisabled, setButtonDisabled] = useState(true); 


    const validateChange = e => {
        e.persist(); 


        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => setErrors({
            ...errors, 
            [e.target.name]: "", 
        }))
        .catch(error => {

            setErrors({
                ...errors, 
                [e.target.name]: error.message, 
            })
        })
    }


    const onInputChange = e => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; 
    

        setValues({
            ...values,
            [e.target.name]: value
        })

        validateChange(e); 

    }


    const onFormSubmit = (e) => {
        e.preventDefault(); 


        setValues(initialValues); 
    }




    let formSchema = yup.object().shape({
        name: yup.string().required('Please provide name').min(2, 'Name must be atleast 2 characters long'), 

        pizzaSize: yup.string().required('Please select a size').oneOf(['small', 'medium', 'large']),

        pepperoni: yup.boolean(), 

        pineapple: yup.boolean(),

        ham: yup.boolean(), 

        chicken: yup.boolean(), 

        special: yup.string() 

    })




    useEffect(() => {

        formSchema.isValid(values)
        .then(valid => setButtonDisabled(!valid)); 



    }, [values, formSchema])








    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <HomePage /> 
                </Route>

                <Route path="/pizza" exact>
                    <HomePageNav />
                    <PizzaFormPage onInputChange={onInputChange} values={values} buttonDisabled={buttonDisabled} errors={errors}/> 
                </Route>

                <Route path="/pizza/confirmation">
                    <HomePageNav /> 
                    <Confirmation /> 
                </Route>
            </Switch>
        </div>
    )
}


export default App; 
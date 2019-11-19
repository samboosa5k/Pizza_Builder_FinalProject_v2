import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import NavBar from './customer_components/NavBar.jsx';
import BurgerBuilder from './builder/BurgerBuilder/BurgerBuilder.jsx';
import FrontPage from './customer_components/FrontPage.jsx';
import Checkout from './customer_components/Checkout.jsx';
import About from './customer_components/About.jsx';
import Contact from './customer_components/Contact.jsx';

import ErrorBoundary from './ErrorBoundary.jsx';

const Home = ( { match } ) => {
    const [ingredientProps, setIngredientProps] = useState( {
        "pizza_1": {
            "pizza_id": 2,
            "pizza_ingredients": [3, 4, 4, 5]
        }
    } );

    const [orderIngredients, setOrderIngredients] = useState( {} );

    return (
        <>
            <Router>

                <NavBar />

                <div className='mainContent-customer'>

                    <Route exact path='/' render={( routeProps ) => (
                        <FrontPage {...routeProps} />
                    )} />

                    <Route exact path='/home' render={( routeProps ) => (
                        <FrontPage {...routeProps} />
                    )} />

                    <Route exact path='/magic/builder' render={( routeProps ) => (
                        <BurgerBuilder {...routeProps} submitOrderIngredients={setOrderIngredients} />
                    )} />

                    <Route exact path='/magic/checkout' render={( routeProps ) => (
                        <Checkout {...routeProps} ingredientProps={ingredientProps} />
                    )} />

                    <Route exact path='/magic' render={( routeProps ) => (
                        <FrontPage {...routeProps} />
                    )} />

                    <Route exact path='/about' render={( routeProps ) => (
                        <About {...routeProps} />
                    )} />

                    <Route exact path='/contact' render={( routeProps ) => (
                        <Contact {...routeProps} />
                    )} />

                </div>

            </Router>
        </>
    )
}

export default Home;

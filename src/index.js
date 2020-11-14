import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import RedirectAction from "./Scripts/Redirect";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Recipes_Launch from "./pages/Recipes_Launch";
import Recipes_Breakfast from "./pages/Recipes_Breakfast";
import Recipes_Dinner from "./pages/Recipes_Dinner";

ReactDOM.render(
    <Router>
        <div>
            <Link to="/">
                Назад
            </Link>

            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/pages/Recipes_Breakfast" component={Recipes_Breakfast}/>
                <Route path="/pages/Recipes_Launch" component={Recipes_Launch}/>
                <Route path="/pages/Recipes_Dinner" component={Recipes_Dinner}/>
            </Switch>
        </div>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();

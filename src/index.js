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
import CustomizedSteppers from "./Scripts/CustomizedSteppers";
import CheckboxesGroup from "./Scripts/CheckBoxes";
import Recipe_1 from "./pages/Recipe_1";
import Recipe_2 from "./pages/Recipe_2";

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/pages/Recipes_Breakfast" component={Recipes_Breakfast}/>
                <Route path="/pages/Recipes_Launch" component={Recipes_Launch}/>
                <Route path="/pages/Recipes_Dinner" component={Recipes_Dinner}/>
                <Route path="/pages/Recipe_1" component={Recipe_1}/>
                <Route path="/pages/Recipe_2" component={Recipe_2}/>
            </Switch>
        </div>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();

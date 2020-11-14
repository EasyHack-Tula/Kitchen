import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import App from "../Main";
import Home from "../pages/Recipes_Launch";
import React from "react";

function RedirectAction() {
       return (<Router>
            <div>
                <Link to="../">
                    Назад
                </Link>
                <Switch>
                    <Route exact path="../" component={App}/>
                    <Route path="../pages/Home" component={Home}/>
                </Switch>
            </div>
        </Router>)
}

export default RedirectAction
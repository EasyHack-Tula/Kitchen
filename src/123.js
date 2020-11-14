import './Menu.css';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper} from "@material-ui/core"

import Breakfast from './image/Breakfast.jpg'
import Lunch from './image/Lunch.jpg'
import Dinner from './image/Dinner.jpg'

//import ActionLink from './Scripts/Button'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

import Home from "./pages/Recipes_Launch";
import About from "./pages/About";



//---------------------------------------------------------



var imageItem1 = {
    backgroundImage: "url(" + Breakfast + ")"
};
var imageItem2 = {
    backgroundImage: "url(" + Lunch + ")"
};
var imageItem3 = {
    backgroundImage: "url(" + Dinner + ")"
};



function Main() {

    return (
        <div>
            <div className="content">
                <h1 className="headerText">
                    Книга Вкуса
                </h1>
                <div className="ItemCon">
                    <Grid container spacing={8}>
                        <Grid item xs={4} sm={3}>
                            <div className="ItemCircle" style={imageItem1}>
                                <div href='/pages/Home' className="ItemName">
                                    Завтрак
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <div className="ItemCircle" style={imageItem2}><div className="ItemName">Обед</div></div>

                        </Grid>
                        <Grid item xs={4} sm={3}>
                            <div className="ItemCircle" style={imageItem3}><div className="ItemName">Ужин</div></div>

                        </Grid>

                    </Grid>
                </div>

            </div>
        </div>
    )};

export default Main;

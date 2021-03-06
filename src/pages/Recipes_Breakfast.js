import '../App.css';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper} from "@material-ui/core"

import Breakfast from '../image/Breakfast.jpg'
import Lunch from '../image/Lunch.jpg'
import Dinner from '../image/Dinner.jpg'

import ActionLink from '../Scripts/Button'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

import Recipe_1 from "./Recipe_1";
import Main from "../Main";
import CheckboxesGroup from "../Scripts/CheckBoxes";








var imageItem1 = {
    backgroundImage: "url(" + Breakfast + ")"
};
var imageItem2 = {
    backgroundImage: "url(" + Lunch + ")"
};
var imageItem3 = {
    backgroundImage: "url(" + Dinner + ")"
};



function Recipes_Breakfast() {

    return (
        <Router>
        <div>
            <h1 className="headerText">
                Книга Вкуса
            </h1>
            <div className="content">

                <div className="ItemCon">
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={4}>
                            <a href="/pages/Recipe_1">
                            <div className="ItemCircle" style={imageItem1}>
                                <div className="ItemName">
                                    Завтрак
                                </div>
                            </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="ItemCircle" style={imageItem2}><div className="ItemName">Обед</div></div>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="ItemCircle" style={imageItem3}><div className="ItemName">Ужин</div></div>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="ItemCircle" style={imageItem2}><div className="ItemName">Обед</div></div>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="ItemCircle" style={imageItem3}><div className="ItemName">Ужин</div></div>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="ItemCircle" style={imageItem3}><div className="ItemName">Ужин</div></div>

                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
        </Router>
    )};

export default Recipes_Breakfast;

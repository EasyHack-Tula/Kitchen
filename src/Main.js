import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper} from "@material-ui/core"

import Breakfast from './image/Breakfast.jpg'
import Lunch from './image/Lunch.jpg'
import Dinner from './image/Dinner.jpg'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Recipes_Breakfast from "./pages/Recipes_Breakfast";




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
            <div>
                <h1 className="headerText">
                Книга Вкуса
                </h1>
            </div>
            <div className="content">

                <div className="ItemCon">
                    <Grid container spacing={9}
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Grid item  sm={4}>
                            <a href='/pages/Recipes_Breakfast'>
                            <div className="ItemCircle" style={imageItem1}>
                                <div className="ItemName">
                                    Завтрак
                                </div>
                            </div>
                            </a>
                        </Grid>
                        <Grid item  sm={4}>
                            <a href='/pages/Recipes_Launch'>
                            <div className="ItemCircle" style={imageItem2}>
                                <div className="ItemName">
                                    Обед
                                </div>
                            </div>
                            </a>
                        </Grid>
                        <Grid item  sm={4}>
                            <a href='/pages/Recipes_Dinner'>
                            <div className="ItemCircle" style={imageItem3}>
                                <div className="ItemName">
                                    Ужин
                                </div>
                            </div>
                            </a>
                        </Grid>

                    </Grid>
                </div>

            </div>
        </div>
    )};

export default Main;

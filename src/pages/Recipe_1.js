
import '../Recipe.css'
import React from 'react';
import Image1 from '../image/rec1_1.jpg'
import CustomizedSteppers from "../Scripts/CustomizedSteppers";

var ImageBack1 = {
    backgroundImage: "url(" + Image1 + ")"
}


function Recipe_1() {
    return (
        <div>
            <div className="RecImg" style={ImageBack1}></div>
            <div className="Container">
                <div className='nameBox'>
                       <div className="NameText">Сэндвич</div>
                        <div className="underText"></div>
                </div>
                <div className="TextBox">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum rutrum elit. Quisque non tortor velit. Sed aliquam, enim ut efficitur consequat, leo nulla posuere turpis, vitae aliquet erat quam id est. Aliquam erat volutpat. Sed vel lectus pellentesque, ultrices velit et, molestie velit. Proin sed sapien purus. Ut ipsum neque, accumsan vel ante quis, vehicula fringilla est. Mauris sit amet gravida tellus, eu tempus metus. Sed cursus felis in dolor condimentum, eget luctus augue facilisis. Morbi non ex hendrerit, blandit eros id, tempor lectus.

                    Nulla et rutrum augue. Donec vel augue ante. Nunc posuere quam sit amet consequat hendrerit. Proin a metus vitae elit condimentum ornare vel id ligula. Nullam mollis libero ut fermentum ullamcorper. Quisque sed odio augue. Etiam laoreet felis eu vehicula blandit.
                </div>
                <div class="IngerdientsBox">
                    <div className="ingr">Ингредиенты</div>
                    
                </div>
            </div>
        </div>
    )
};


export default Recipe_1
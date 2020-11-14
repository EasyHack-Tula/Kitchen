import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class ActionLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      return <a href='pages/Home'></a>;

    }
    render() {
        return <button onClick={this.handleClick}>{this.props.name}</button>;
    }

}

export default ActionLink
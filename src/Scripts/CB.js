import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));


export default class CB extends React.Component() {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            gilad: false,
            jason: false,
            antoine: false,


        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    render() {
        return (
            <div className='useStyles'>

                    <FormLabel component="legend">Отметьте все шаги</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={this.state.gilad} onChange={this.handleChange(this.state.gilad)} name="gilad" />}
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.jason} onChange={this.handleChange(this.state.jason)} name="jason" />}
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.antoine} onChange={this.handleChange(this.state.antoine)} name="antoine" />}
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Отметьте все шаги</FormHelperText>

            </div>
        );
    }


}















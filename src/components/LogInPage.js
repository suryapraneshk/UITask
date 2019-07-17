import React, { Component } from 'react';
import '../css/style.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import MuiPhoneInput from 'react-phone-input-2';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}));



class LogInPage extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                email: '',
                password: '',
            }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const classes = useStyles;
        return (
            <div className="FullPage">
                <div className="LeftSide">
                    <h2> Log In </h2>
                    <div className="LogInBox" style={{ "border": "0.5px solid white" }}>
                        <div>
                            <i class="glyphicon glyphicon-envelope"></i>
                            <input type="text" placeholder="Email" class="text-line" />
                        </div>
                        <div>
                            <i class="glyphicon glyphicon-lock"></i>
                            <input type="text" placeholder="Password" class="text-line" />
                        </div>
                        <div style={{ "margin": "4%" }}>
                            <Button type="password" variant="contained" color="primary" onClick={() => this.onSignIn}>
                                Sign In
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="RightSide">
                    <h2> Sign Up </h2>
                    <div className="SignUpBox">
                        <div>
                            <i class="glyphicon glyphicon-font"></i>
                            <input type="text" placeholder="First Name" class="text-line" />
                        </div>
                        <div>
                            <i class="glyphicon glyphicon-bold"></i>
                            <input type="text" placeholder="Last Name" class="text-line" />
                        </div>
                        <div>
                            <i class="glyphicon glyphicon-phone"></i>
                            {/* <MuiPhoneInput
                                defaultCountry='it'
                                regions={'europe'}
                            /> */}
                            <input type="text" placeholder="Mobile Number" class="text-line" />
                        </div>
                        <div>
                            <i class="glyphicon glyphicon-envelope"></i>
                            <input type="email" placeholder="Email" class="text-line" />
                        </div>
                        <div>
                            <i class="glyphicon glyphicon-lock"></i>
                            <input type="password" placeholder="Password" class="text-line" />
                        </div>
                        <div>
                            <i class="glyphicon glyphicon-lock"></i>
                            <input type="password" placeholder="Confirm Password" class="text-line" />
                        </div>
                        <Button type="submit" variant="contained" color="primary" >
                            Sign Up
                            </Button>
                    </div>
                </div>
            </div>
        );
    }
}

LogInPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(LogInPage);
import React, { Component } from 'react';
import './Style.css';
import LoginImg from '../../Images/loginlock.png';
import { NavLink } from 'react-router-dom';
import { connect } from  'react-redux';
import * as actionTypes from '../../Store/actions';

class Login extends Component {

    state = {
        email: '',
        password: '',
        submitted:false
    }

    handleChange = (e) => {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        console.log(this.state);
        const { email, password } = this.state; // About ES6
        let pattern =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
        if ((password === '') || (email === '')) {
            alert('Cannot be Empty')

        }else if (!pattern.test(email)) {
            alert('Email Not Valid');

        }else if ((password.length < 4)) {
            alert('Not Valid, Password must be (Min length = 4)');

        }else if (email === this.props.savedEmail && password === this.props.savedPassword) {
            alert('SUCCESSFUL LOGIN')
            this.props.updateAuthentication(true);
            this.props.history.push('/');
        }else {
            alert('ERROR LOGIN')
            this.props.history.push('/login');
        }
    }

    render() {
        const { email, password, submitted } = this.state;
        return (
            <div className="base-container">
                <div className="content">
                    <div className='image'>
                        <img src={LoginImg} alt="login" />
                    </div>
                    <div className="form">
                        <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="e-mail" onChange={this.handleChange} />
                            {submitted && !email &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">Password is required (at least 4 characters)</div>
                            }
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn" type="button" onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                    <div className="regis">
                        <p className="parag">Don't have any account?</p>
                        <NavLink to="/register"
                            style={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                             Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       savedEmail: state.email,
       savedPassword: state.password
    };
 };

 const mapDispatchToProps = dispatch => {
    return {
       updateAuthentication: (isAuthenticated) => dispatch( {type: actionTypes.UPDATE_AUTHENTICATION, isAuthenticated}),
    };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
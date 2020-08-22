import React from 'react';
import './Style.css';
import { connect } from  'react-redux';
import * as actionTypes from '../../Store/actions';

class Register extends React.Component {
    
   state = {
      username:"",
      email: "",
      password: "",
      gender:"",
      birthday:"",
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
      const { email, password, username } = this.state; 
      let pattern =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      
      if ((password === '') || (email === '') || (username === '')) {
         alert('Cannot be empty')

      }else if (!pattern.test(email)) {
         alert('Email Not Valid');

      }else if ((username.length < 4) || (password.length < 4)) {
         alert('Not Valid, Username And Password must be (Min length = 4)');

      }else {
         // alert(' It Is Valid ');
         this.props.onUpdateEmail(email);
         this.props.onUpdatePassword(password);
         this.props.history.push('/login');
      }
   }
   
   render (){
      const { username, email, password, gender, birthday, submitted } = this.state;
      return (
         <div className="base-container">
            <div className="content regisContent">
            <div className="login">Sign Up</div>
            <div className="form">
                  <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                     <label>Username</label>
                     <input type="text" name="username" placeholder="username" onChange={this.handleChange} required />
                     {submitted && !username &&
                        <div className="help-block">Username is required (at least 4 characters)</div>
                     }
                  </div>
                  <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                  <label>Email</label>
                     <input type="email" name="email" placeholder="e-mail" onChange={this.handleChange} required/>
                     {submitted && !email &&
                        <div className="help-block">Email is required</div>
                     }
                  </div>
                  <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label>Password</label>
                     <input type="password" name="password" placeholder="password" onChange={this.handleChange} required/>
                     {submitted && !password &&
                        <div className="help-block">Password is required (at least 4 characters)</div>
                     }
                  </div>
                  <div className={'form-group' + (submitted && !gender ? ' has-error' : '')}>
                     <label>Gender</label>
                     <select name="gender" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                     </select>
                     {submitted && !gender &&
                        <div className="help-block">Gender is required</div>
                     }
                  </div>
                  <div className={'form-group' + (submitted && !birthday ? ' has-error' : '')}>
                     <label htmlFor="birthday">Birthdate:</label>
                     <input type="date" id="birthday" name="birthday" onChange={this.handleChange}/>
                     {submitted && !birthday &&
                        <div className="help-block">Birthdate is required</div>
                     }
                  </div>
               </div>
               <div className="footer">
                  <button className="btn" type="button" onClick={this.handleSubmit}>
                     Sign Up
                  </button>
               </div>
            </div>
         </div>
      );
   }
};

const mapStateToProps = state => {
   return {
      email: state.email,
      password: state.password
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onUpdateEmail: (email) => dispatch( {type: actionTypes.UPDATE_EMAIL, email} ),
      onUpdatePassword: (password) => dispatch ({type: actionTypes.UPDATE_PASSWORD, password})
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
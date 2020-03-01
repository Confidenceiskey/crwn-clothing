import React, { Component } from 'react';

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import './signin.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: ''});
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value});
  }

  render() {
    return (
      <div className='signin'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />
          <FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

import './signin.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value});
  }

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className='signin'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />
          <FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);

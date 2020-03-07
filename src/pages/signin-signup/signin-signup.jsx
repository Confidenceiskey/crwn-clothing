import React from 'react';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/sign-up/sign-up';

import './signin-signup.scss';

const SignInSignUpPage = () => (
  <div className='signin-signup'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;

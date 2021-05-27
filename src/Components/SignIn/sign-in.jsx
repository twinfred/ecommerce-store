import React from 'react';

import './sign-in.scss';

import FormInput from '../FormInput/form-input';

const SignIn = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSignIn = (event) => {
    event.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    emailRef.current.value = '';
    passwordRef.current.value = '';
    console.log(data);
  }

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSignIn}>
        <FormInput
          id="SignInEmail"
          type="email"
          label="Email"
          ref={emailRef}
        />
        <FormInput
          id="SignInPassword"
          type="password"
          label="Password"
          ref={passwordRef}
        />
        <FormInput
          type="Submit"
          onClick={handleSignIn}
          defaultValue="Sign In"
        />
      </form>
    </div>
  )
};

export default SignIn;
import React from 'react';

import './sign-in.scss';

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

  return(
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSignIn}>
        <label htmlFor="SignInEmail">Email</label>
        <input type="email" id="SignInEmail" required ref={emailRef}/>
        <label htmlFor="SignInPassword">Password</label>
        <input type="password" id="SignInPassword" required ref={passwordRef}/>
        <input type="submit" value="Sign In"/>
      </form>
    </div>
  )
}

export default SignIn;
import React, { Component } from 'react';

import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import * as actions from '../store/actions/index';

import { connect } from 'react-redux';

class AuthScreen extends Component {
  state = {
    email: '',
    password: '',
    isLogin: true
  };

  componentDidMount() {
    if (this.props.authRedirectPath !== '/') {
      this.onSetAuthRedirectPath();
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isLogin: !prevState.isLogin };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.email,
      this.state.password,
      this.state.isLogin
    );
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }
    const ErrMsg = this.props.error ? (
      <p style={{ color: 'red' }}>{this.props.error.message}</p>
    ) : null;
    return (
      <Wrapper>
        {authRedirect}
        <MyForm onSubmit={this.onSubmitHandler} autocomplete='off'>
          <h1 style={{ color: '#e84855' }}>Welcome !</h1>
          {ErrMsg}
          <Input
            type='email'
            name='email'
            autocomplete='off'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />

          <Input
            type='password'
            name='password'
            autocomplete='off'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <LoginBtn type='submit'>
            {this.state.isLogin ? 'Login' : 'Registration'}
          </LoginBtn>
          <SwitchingBtn onClick={this.switchAuthModeHandler}>
            Switch to {this.state.isLogin ? 'Registration' : 'Login'}
          </SwitchingBtn>
        </MyForm>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isLogin) =>
      dispatch(actions.auth(email, password, isLogin)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 100px auto;
  width: 50%;
  height: auto;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    width: 400px;
  }
`;

const MyForm = styled.form`
  width: 60%;
  height: auto;
  display: grid;
  grid-row-gap: 20px;
  align-content: center;
`;

const LoginBtn = styled.button`
  width: 70%;
  height: auto;
  border-top: 5px;
  padding: 5px;
  border: 1px solid #e84855;
  justify-self: center;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const SwitchingBtn = styled.button`
  width: 70%;
  border: none;
  justify-self: center;
  background-color: white;
  color: red;
  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;
  cursor: pointer;
  :focus {
    outline: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  border: none;
`;

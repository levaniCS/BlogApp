import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import '../App.css';

const Header = (props) => {
  const UserName = localStorage.getItem('userName');
  return (
    <MyHeader>
      <div>
        <h1>
          <NavL to='/'>
            Hello <span style={{ color: '#adefd1ff' }}>{UserName}</span>
          </NavL>
        </h1>
      </div>
      <nav>
        <NavItems>
          <NavItem>
            <NavL activeClassName='Active-nav' to='/users'>
              List of Users
            </NavL>
          </NavItem>
          <NavItem>
            <NavL activeClassName='Active-nav' to='/feed'>
              My feed
            </NavL>
          </NavItem>
          <NavItem onClick={props.onLogout}>
            <NavL to='/login'>Logout</NavL>
          </NavItem>
        </NavItems>
      </nav>
    </MyHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const MyHeader = styled.header`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00203fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const NavItems = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-flow: row;
  height: 100%;
`;

const NavItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  white-space: nowrap;
  color: white;
  font-weight: bold;
  display: block;
  width: 100%;
`;

const NavL = styled(NavLink)`
  color: white;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  &:hover {
    color: blue;
  }
`;

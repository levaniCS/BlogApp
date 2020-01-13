import React, { Component } from 'react';
import styled from 'styled-components';

import * as actions from '../store/actions/index';

import { connect } from 'react-redux';

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onGetUsers();
  }

  handleUserClick = (user) => {
    this.setState({
      [user]: !this.state[user]
    });
    this.props.onClickUser(user, this.state[user], this.props.followList);
  };

  render() {
    console.log(this.props.followList);
    let usersArr = [];
    if (this.props.data) {
      usersArr = Object.values(this.props.data).map((post) => {
        return post.userName;
      }); // convert object to array => ["test", "test", "test", "admin", "admin"]
    }

    usersArr = usersArr.filter((item, pos) => {
      return usersArr.indexOf(item) === pos;
    }); // ["test", "admin"]

    const UserName = localStorage.getItem('userName');
    const index = usersArr.indexOf(UserName);
    if (index >= 0) {
      usersArr.splice(index, 1); // ["test"]
    }

    const outUsers = usersArr.map((user) => {
      return (
        <Myli onClick={() => this.handleUserClick(user)} key={user}>
          {user} {this.state[user] ? ' + ' : null}
        </Myli>
      );
    });
    return (
      <Wrapper>
        <p style={{ color: 'red' }}>Click on the user to Follow :) </p>
        <ul>{outUsers}</ul>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    data: state.users.data,
    followList: state.users.followList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUsers: () => dispatch(actions.GetUsers()),
    onClickUser: (user, followed, followList) =>
      dispatch(actions.followUsersHandler(user, followed, followList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);

const Wrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 50px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
`;

const Myli = styled.li`
  list-style: none;
  color: #e84855;
  font-weight: bold;
  font-weight: 20px;
  cursor: pointer;
`;

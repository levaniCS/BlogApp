import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import axios from 'axios';

class NewPost extends Component {
  state = {
    title: '',
    content: ''
  };

  onPressBtn = () => {
    let UserName = localStorage.getItem('userName');
    const data = {
      title: this.state.title,
      content: this.state.content,
      userName: UserName,
      userId: this.props.userId
    };
    axios
      .post(
        'https://postsapp-adcf2.firebaseio.com/post.json?auth=' +
          this.props.token,
        data
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    this.setState({ title: '', content: '' });
  };

  render() {
    return (
      <Wrapper>
        <h1 style={{ color: '#e84855' }}>Write a Post</h1>
        <StLabel>Title</StLabel>
        <MyInp
          type='text'
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <StLabel>Content</StLabel>
        <MyTxtarea
          rows='4'
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <Button onClick={this.onPressBtn}>Post</Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
    userId: state.auth.userId,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(NewPost);

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
`;

const StLabel = styled.label`
  display: block;
  margin: 10px auto;
  color: #00203fff;
  text-align: center;
  font-weight: bold;
`;

const MyInp = styled.input`
  display: block;
  width: 80%;
  box-sizing: border-box;
  border: 1px solid #00203fff;
  border-radius: 5px;
  outline: none;
  font: inherit;
  margin: auto;
`;
const MyTxtarea = styled.textarea`
  display: block;
  width: 80%;
  box-sizing: border-box;
  border: 1px solid #00203fff;
  border-radius: 5px;
  outline: none;
  font: inherit;
  margin: auto;
`;

const Button = styled.button`
  margin: 5px 0;
  width: 30%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #e84855;
  color: #fa923f;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

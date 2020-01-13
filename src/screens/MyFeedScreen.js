import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Post from '../components/Post';
import { connect } from 'react-redux';

import axios from 'axios';

class MyFeedScreen extends Component {
  state = {
    OutputData: []
  };
  componentDidMount() {
    const queryParams =
      '?auth=' +
      this.props.token +
      '&orderBy="userId"&equalTo="' +
      this.props.userId +
      '"';
    axios
      .get('https://postsapp-adcf2.firebaseio.com/post.json' + queryParams)
      .then((res) => {
        this.setState({ OutputData: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    //console.log('[DATA]', this.props.data);
    //console.log('[FOLLOW LIST]', this.props.followList);

    let Posts = null;
    if (this.state.OutputData) {
      Posts = Object.values(this.state.OutputData).map((post) => {
        return (
          <Post key={post.title} title={post.title} content={post.content} />
        );
      });
    }

    return (
      <Wrapper>
        <Header />
        <br />
        <br />
        <br />
        <div>{Posts}</div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    data: state.users.data,
    followList: state.users.followList
  };
};

export default connect(mapStateToProps)(MyFeedScreen);

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`;

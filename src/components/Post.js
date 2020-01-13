import React from 'react';
import styled from 'styled-components';

const Post = (props) => {
  return (
    <Wrapper>
      <header
        style={{
          color: '#e84855',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        {props.title}
      </header>
      <article style={{ whiteSpace: 'normal', wordBreak: 'break-all' }}>
        {props.content}
      </article>
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  width: 50%;
  height: auto;
  padding: 10px;
  margin: 50px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 2fr 8fr;
`;

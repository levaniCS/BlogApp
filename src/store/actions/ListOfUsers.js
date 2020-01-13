import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getUsersStart = () => {
  return {
    type: actionTypes.GET_USERS_START
  };
};

export const getUsersSuccess = (data) => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    data: data
  };
};

export const getUsersFail = (error) => {
  return {
    type: actionTypes.GET_USERS_FAIL,
    error: error
  };
};

export const GetUsers = () => {
  return (dispatch) => {
    dispatch(getUsersStart());
    axios
      .get(
        'https://postsapp-adcf2.firebaseio.com/post.json?auth=' +
          localStorage.getItem('token')
      )
      .then((res) => {
        dispatch(getUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUsersFail(err.response.data.error));
      });
  };
};

export const followUsers = (followList) => {
  return {
    type: actionTypes.FOLLOW__USERS_HANDLER,
    followList: followList
  };
};

export const followUsersHandler = (userName, followed, followList) => {
  return (dispatch) => {
    let newList = [...followList].concat(userName);

    console.log('[USERNAME]: ', userName);
    console.log('[AFTER CONCAT]: ', newList);

    if (followed) {
      newList = [...newList].filter((user) => {
        return user !== userName;
      });
    }
    console.log('[AFTER FILTER]: ', newList);
    dispatch(followUsers(newList)); // followeed users list
  };
};

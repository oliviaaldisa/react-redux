export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
const CONFIG = require('../config/config')

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json,
});

export function fetchPosts(page) {
  return function (dispatch) {
    dispatch(requestPosts());
    let param = ""
    page+=1

    if(page && page > 1) {
      param = `?page=${page}`
    }

    return fetch(CONFIG.API_URL+param)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedPosts(json));
      },
    );
  };
}
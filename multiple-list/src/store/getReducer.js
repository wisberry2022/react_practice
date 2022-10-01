import axios from 'axios';

const GET = 'GET';

export const getData = (url, key, totalList) => ({ type: GET, url, key, totalList });

const initialState = [];

export default function getReducer(state = initialState, action) {
  switch (action.type) {
    case GET:
      return state;
    default:
      return state;
  }
}
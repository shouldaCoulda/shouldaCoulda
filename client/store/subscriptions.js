import axios from "axios";
import history from "../history";

const initialState = [];
// const SET_AUTH = 'SET_AUTH'

// /**
//  * ACTION CREATORS
//  */
// const setAuth = auth => ({type: SET_AUTH, auth})

/**
 * REDUCER
 */
export default function (subscriptions = initialState, action) {
  switch (action.type) {
    // case SET_AUTH:
    //   return action.auth
    default:
      return subscriptions;
  }
}

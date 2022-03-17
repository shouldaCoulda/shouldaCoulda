import axios from 'axios';
import history from '../history';

const GET_ALL_SUBSCRIPTIONS = 'GET_ALL_SUBSCRIPTIONS';

const getSubscriptions = (subscriptions) => {
  return {
    type: GET_ALL_SUBSCRIPTIONS,
    subscriptions,
  };
};

const initialState = [];

export default function (subscriptions = initialState, action) {
  switch (action.type) {
    default:
      return subscriptions;
  }
}

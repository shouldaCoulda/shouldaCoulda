import axios from 'axios';
import history from '../history';

const GET_ALLSUBSCRIPTIONS = 'GET_ALLSUBSCRIPTIONS';

const initialState = [];

export default function (subscriptions = initialState, action) {
  switch (action.type) {
    default:
      return subscriptions;
  }
}

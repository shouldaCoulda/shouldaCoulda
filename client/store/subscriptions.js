import axios from 'axios';
import history from '../history';

const GET_ALL_SUBSCRIPTIONS = 'GET_ALL_SUBSCRIPTIONS';

const getSubscriptions = (subscriptions) => {
  return {
    type: GET_ALL_SUBSCRIPTIONS,
    subscriptions,
  };
};

const fetchSubscriptions = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/subscriptions');
      dispatch(getSubscriptions(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function (subscriptions = initialState, action) {
  switch (action.type) {
    default:
      return subscriptions;
  }
}

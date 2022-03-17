import axios from "axios";

// Set action type
const ADD_SINGLE_SUBSCRIPTION = "ADD_SINGLE_SUBSCRIPTION"

// Action creator
const _addSingleSubscription = (sub) => {
  return {
    type: ADD_SINGLE_SUBSCRIPTION,
    sub
  }
}

// Thunk creator
export const fetchCreateSubscription = (sub) => {
  return async (dispatch) => {
    try {
      const { data: createdSub } = await axios.post('/api/subscriptions', sub);
      dispatch(_addSingleSubscription(createdSub))
    } catch (error) {
      console.error('Error in addSingleSubscription thunk!')
    }
  }
};

// Initial state
const initState = [];

// Reducer
const addSub = (state = initState, action) => {
  switch (action.type) {
    case ADD_SINGLE_SUBSCRIPTION: {
      return [...state, action.sub]
    }
    default:
      return state
  }
}

export default addSub

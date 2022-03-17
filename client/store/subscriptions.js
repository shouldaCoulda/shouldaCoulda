import axios from "axios";
import history from "../history";

const initialState = [];

export default function (subscriptions = initialState, action) {
  switch (action.type) {
    default:
      return subscriptions;
  }
}

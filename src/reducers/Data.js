import { DATA_INSERT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DATA_INSERT:
      return action.payload;
    default:
      return state;
  }
};
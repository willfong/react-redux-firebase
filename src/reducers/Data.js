import { DATA_INSERT, DATA_SELECT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DATA_INSERT:
      return state;
    case DATA_SELECT:
      return action.payload;
    default:
      return state;
  }
};
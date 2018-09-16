import { dbTodo } from '../firebase';
import { DATA_INSERT, DATA_SELECT } from "./types";

export const dataInsert = (uid, data) => async dispatch => {
    console.log(data);
    const payload = {uid, data}; 
    //const newPostKey = dbTodo.push().key;
    dbTodo.push(payload);
    dispatch({
        type: DATA_INSERT
    });
}

export const dataSelect = () => async dispatch => {
    dbTodo.on('value', snapshot => {
      dispatch({
        type: DATA_SELECT,
        payload: snapshot.val()
      });
    });
};
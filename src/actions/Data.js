import { dbTodo } from '../firebase';
import { DATA_INSERT } from "./types";

export const dataInsert = newData => async dispatch => {
    console.log(newData);
    dbTodo.push().set(newData);
}

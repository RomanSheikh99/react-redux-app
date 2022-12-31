import counterReducers from "./counterReducers";
import productReducers from "./productReducers";
import studentReducers from "./studentReducers";
import userReducers from "./userReducers";

const reducers = {
    ...productReducers,
    ...counterReducers,
    ...userReducers,
    ...studentReducers,
}


export default reducers;
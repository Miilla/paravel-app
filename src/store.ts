
import { combineReducers, createStore } from "redux";
import { changeCategory , changeProductColor } from "./actions";
import reducers from "./reducers/index";
import { Categories, ProductColors } from './actions';

const store = createStore(
    combineReducers({
        reducers
    })
);

// // This is only used to show us the store state on every dispatch
// const initial = store.getState();
// console.log("Initial: ", initial);
// let changeCounter = 0;
// store.subscribe(() => {
//     changeCounter++;
//     console.log(`State ${changeCounter}: `, store.getState());
// });

store.dispatch(changeCategory([Categories.ALL]));
store.dispatch(changeProductColor([ProductColors.ALL]));
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { allUsersRequestReducer, userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  usersRequest: allUsersRequestReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  allUsersRequestReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
  // userReducer2,
  // userRoleReducer,
} from "./reducers/userReducer";
import { allEventsReducer } from "./reducers/eventReducer";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  // user2: userReducer2,
  // role: userRoleReducer,
  userDetails: userDetailsReducer,
  usersRequest: allUsersRequestReducer,
  events: allEventsReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

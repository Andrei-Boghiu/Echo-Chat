import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import chatReducer from "../reducers/chats";
import authReducer from "../reducers/auth";

export default function configStore() {
	const middleware = [thunk];

	const store = createStore(
		combineReducers({ chats: chatReducer, auth: authReducer }),
		applyMiddleware(...middleware)
	);
	return store;
}

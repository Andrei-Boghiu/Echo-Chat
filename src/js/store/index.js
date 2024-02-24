import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import chatReducer from "../reducers/chats";

export default function configStore() {
	const middleware = [thunk];

	const store = createStore(combineReducers({ chats: chatReducer }), applyMiddleware(...middleware));
	return store;
}

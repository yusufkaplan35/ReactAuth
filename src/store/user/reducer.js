import { USER_LOGIN, USER_LOGOUT } from "../types";
import { userInitialState } from "./initial-state";

export const userReducer = (state = userInitialState, action) => {
	if (action.type === USER_LOGIN) {
		return { ...state, isUserLogin: true, user: action.payload };
	} else if (action.type === USER_LOGOUT) {
		return { ...state, isUserLogin: false, user: {} };
	}

	return state;
};

/* 
    dispatchUser({type: USER_LOGIN, payload: {firstName: "Ali", lastName: "Gel"  }})
    dispatchUser({type: USER_LOGOUT })
*/
import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counter/reducer";
import { counterInitialState } from "./counter/initial-state";
import { userReducer } from "./user/reducer";
import { userInitialState } from "./user/initial-state";

// Bos bir merkezi state olusturuldu
const StoreContext = createContext();

// Componentlerden daha kolay bir sekilde Context import edilsin diye yaptik
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	// useReducre hook u reducer ve initialState i alip geriye sate in getter ve setter ini bize doner.
	const [stateCounter, dispatchCounter] = useReducer(
		counterReducer,
		counterInitialState
	);

	const [stateUser, dispatchUser] = useReducer(userReducer, userInitialState);

	const state = { stateCounter, dispatchCounter, stateUser, dispatchUser };

	return (
		<StoreContext.Provider value={state}>{children}</StoreContext.Provider>
	);
};
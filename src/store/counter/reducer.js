import { COUNTER_DOWN, COUNTER_RESET, COUNTER_UP } from "../types";
import { counterInitialState } from "./initial-state";

export const counterReducer = (state = counterInitialState, action) => {
	// Bu kisimda state guncellenir. Donen return degeri aynen state e aktarilir.

	if (action.type === COUNTER_UP) {
		return { ...state, counter: state.counter + 1 };
	} else if (action.type === COUNTER_DOWN) {
		if (state.counter <= 0) return state;
		return { ...state, counter: state.counter - 1 };
	} else if (action.type === COUNTER_RESET) {
		return { ...state, counter: action.payload };
	}

	// return state; satiri onemli. Eger hic bir if case e girmezse geriye mevcut state i donduruyor. Eger unutulursa yanlis gonderilen bir action type tum state in bosalmasina sebep olur.

	return state;
};

/* 
dispatch({type: COUNTER_UP })
dispatch({type: COUNTER_DOWN })
dispatch({type: COUNTER_RESET, payload: 5 }) 
*/
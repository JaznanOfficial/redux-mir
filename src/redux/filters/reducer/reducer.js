import { COLOR_CHANGED, STATUS_CHANGED } from "../actionTypes/actionTypes";
import  initialState  from "../initialState/initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COLOR_CHANGED:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter((prevColor) => prevColor !== color),
                    };

                default:
                    return state;
            }

            
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload.status,
            };

        default:
            return state;
    }
};

export default reducer;

import { COLOR_CHANGED, STATUS_CHANGED } from "../actionTypes/actionTypes";

export const colorChanged = (color, changeType) => {
    return {
        type: COLOR_CHANGED,
        payload: { color, changeType },
    };
};
export const statusChanged = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: {status},
    };
};

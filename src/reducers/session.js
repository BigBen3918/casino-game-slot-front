import jwt_decode from "jwt-decode";

const initState = {
    balance: 0,
    token: "",
    pooladdress: "",
};

const sessionReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_BALANCE":
            return {
                ...state,
                balance: action.payload,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload,
            };
        case "SET_POOLADDRESS":
            return {
                ...state,
                pooladdress: action.payload,
            };
        default:
            return state;
    }
};

export default sessionReducer;

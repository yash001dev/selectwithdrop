import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    categories: [{ value: 'Javascript', label: 'Javascript' }, { value: 'Java', label: 'Java' }, { value: 'Python', label: 'JPython' }, { value: 'C and C++', label: 'C and C++' }],
    fileInfo: [],
    selectedLanguage: [],
}



const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_PIC:
            console.log("SET CURRENT PIC IS CALLED>...");
            return {
                ...state,
                fileInfo: [...state.fileInfo,action.payload]
            }

        case UserActionTypes.SET_CURRENT_LANGUAGE:
            return {
                ...state,
                selectedLanguage: [...state.selectedLanguage, action.payload]
            }

        default:
            return state;
    }
}

export default userReducer;
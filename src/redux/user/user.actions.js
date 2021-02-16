import UserActionTypes from "./user.types";

export const setCurrentLanguage=(language)=>({
    type:UserActionTypes.SET_CURRENT_LANGUAGE,
    payload:language,
});

export const setCurrentPic=(fileName)=>({
    type:UserActionTypes.SET_CURRENT_PIC,
    payload:fileName,
})
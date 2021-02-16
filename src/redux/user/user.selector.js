import {createSelector} from 'reselect';

const selectUserData=state=>state.user;

export const selectCategories=createSelector(
    [selectUserData],
    user=>user.categories
);

export const selectFileInformation=createSelector(
    [selectUserData],
    user=>user.FileInformation
)


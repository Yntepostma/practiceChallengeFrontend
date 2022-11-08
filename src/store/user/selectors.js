export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.profile;
export const selectSpace = (reduxState) => reduxState.user.mySpace;
export const selectPostMessage = (reduxState) => reduxState.user.message;
export const selectFormStatus = (reduxState) => reduxState.user.form;
export const selectEdit = (reduxState) => reduxState.user.edit;

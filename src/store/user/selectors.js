export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.profile;
export const selectSpace = (reduxState) => reduxState.user.mySpace;
export const selectStories = (reduxState) => reduxState.user.mySpace.stories;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.username;

const authSelectors = { selectIsLoggedIn, selectUserName };
export default authSelectors;

export const types = {
  GET_ALL_PROFILE: 'GET_ALL_PROFILE',
  GET_ALL_PROFILE_SUCCESS: 'GET_ALL_PROFILE_SUCCESS',
  GET_ALL_PROFILE_FAIL: 'GET_ALL_PROFILE_FAIL',
  GET_ACCESS_TOKEN: 'GET_ACCESS_TOKEN',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
  GET_ALL_POSTS: 'GET_ALL_POSTS',
  GET_ALL_POSTS_SUCCESS: 'GET_ALL_POSTS_SUCCESS',
  GET_ALL_POSTS_FAIL: 'GET_ALL_POSTS_FAIL',
  GET_ALL_POSTS_MORE: 'GET_ALL_POSTS_MORE',
  GET_ALL_POSTS_MORE_SUCCESS: 'GET_ALL_POSTS_MORE_SUCCESS',
  GET_ALL_POSTS_MORE_FAIL: 'GET_ALL_POSTS_MORE_FAIL',
};
const action = (type: string, payload?: any) => ({
  type,
  payload,
});
export const profileAction = {
  getallProfiles: (payload: any) => action(types.GET_ALL_PROFILE, payload),
  getallProfilesSuccess: (payload: any) =>
    action(types.GET_ALL_PROFILE_SUCCESS, payload),
  getallProfilesFail: (payload: any) =>
    action(types.GET_ALL_PROFILE_FAIL, payload),

  getToken: (payload: any) => action(types.GET_ACCESS_TOKEN, payload),
  setToken: (payload: any) => action(types.SET_ACCESS_TOKEN, payload),
  getallPosts: (payload: any) => action(types.GET_ALL_POSTS, payload),
  getallPostsSuccess: (payload: any) =>
    action(types.GET_ALL_POSTS_SUCCESS, payload),
  getallPostsFail: (payload: any) => action(types.GET_ALL_POSTS_FAIL, payload),
};

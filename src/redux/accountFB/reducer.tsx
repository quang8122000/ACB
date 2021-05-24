import {types} from './action';
const initState = {
  allProfile: [],
  allPosts: [],
  allAccesstoken: '',
};
const reducerProfile: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ACCESS_TOKEN: {
      return {...state, allAccesstoken: payload};
    }
    case types.SET_ACCESS_TOKEN: {
      return {...state, allAccesstoken: []};
    }
    case types.GET_ALL_PROFILE: {
      return {...state, allProfile: []};
    }
    case types.GET_ALL_PROFILE_SUCCESS: {
      return {...state, allProfile: payload};
    }
    case types.GET_ALL_PROFILE_FAIL: {
      return {...state, allProfile: []};
    }
    case types.GET_ALL_POSTS: {
      return {...state, allPosts: []};
    }
    case types.GET_ALL_POSTS_SUCCESS: {
      return {...state, allPosts: payload};
    }
    case types.GET_ALL_POSTS_FAIL: {
      return {...state, allPosts: []};
    }
    default:
      return state;
  }
};
export default reducerProfile;

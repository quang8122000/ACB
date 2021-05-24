import {combineEpics} from 'redux-observable';
import {getallProfiles, getallPosts} from './accountFB/epic';
const rootEpic = combineEpics(getallProfiles, getallPosts);
export default rootEpic;

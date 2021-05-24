import {combineReducers} from 'redux';
import reducerProfile from './accountFB/reducer';
export default combineReducers({
  account: reducerProfile,
});

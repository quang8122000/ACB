import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import AsyncStorage from '@react-native-community/async-storage';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import rootEpic from './rootEpic';

import rootReducers from './rootReducers';
const Token = createWhitelistFilter('account', ['allAccesstoken']);

const persistConfig: any = {
  key: 'root',
  storage: AsyncStorage,
  //   blacklist: [],
  transforms: [Token],
};
const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
store.subscribe(() => {
  console.log('state', store.getState());
});
export const persistor = persistStore(store);
export default store;

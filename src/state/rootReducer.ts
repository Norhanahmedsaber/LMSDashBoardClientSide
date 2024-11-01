// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import languageReducer from './language/languageSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer,
});

export default rootReducer;

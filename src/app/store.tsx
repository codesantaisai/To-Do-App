import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // Import combineReducers for TypeScript support
import todoReducer from '../slices/todoSlice';

// Define the root reducer
const rootReducer = combineReducers({
  todo: todoReducer,
  // other reducers...
});

// Create the store using the rootReducer
export const store = configureStore({
  reducer: rootReducer,
});

// Define the RootState type based on the root reducer
export type RootState = ReturnType<typeof rootReducer>;

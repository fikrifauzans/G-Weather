import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import regionReducer from './slices/regionSlice';
const store = configureStore({
  reducer: {
    weather: weatherReducer,
    region: regionReducer
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

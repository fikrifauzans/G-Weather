import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from '../../api/api';
import {WeatherType as WeatherState} from'../types/weatherType'

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

export const getWeather: any = createAsyncThunk(
  'weather/getWeather',
  async (location: string, { rejectWithValue }) => {
    try {
    
      const data = await fetchWeather(location);
      
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      
        
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;

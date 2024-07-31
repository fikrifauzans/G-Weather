import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRegionData } from '../../api/api';
import { RegionType as RegionState } from '../types/regionType'
;

const initialState: RegionState = {
    data: null,
    loading: false,
    error: null
}


export const getCountries: any = createAsyncThunk(
    'region/getCountries',
    async () => {
        try {
            const data = await fetchRegionData('/countries')

            return data
        } catch (error) {
            return error
        }
    }
)

const mappingDataRegion = (data: any) => {
  return data.data?.map((val: any) => {
    return {...val, label: val?.country}
  })
  
}

const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getCountries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.data = mappingDataRegion(action?.payload)
            })
            .addCase(getCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default regionSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { randomiserAPI } from '../../DAL/rendomiserAPI';

export const randomiserSlice = createSlice({
  name: 'randomiser',
  initialState: {
    value: 0
  },
  reducers: {
    // normal reducer with simple logic
  },
  extraReducers: (builder) => {
    builder.addCase(random.fulfilled, (state, action) => {
      state.value = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function

export default randomiserSlice.reducer

export const random = createAsyncThunk('randomiser/random',
  async () => {
    // we call another API
      const response = await randomiserAPI.getRandomNumber()
    return response.data.number
  }
);
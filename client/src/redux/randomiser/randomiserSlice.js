import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { randomiserAPI } from '../../DAL/rendomiserAPI';

export const randomiserSlice = createSlice({
  name: 'randomiser',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(random.fulfilled, (state, action) => {
      state.value = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = randomiserSlice.actions


export default randomiserSlice.reducer

export const random = createAsyncThunk('randomiser/random',
  async () => {
    // we call another API
      const response = await randomiserAPI.getRandomNumber()
    return response.data.number
  }
);
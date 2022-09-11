import { createSlice } from '@reduxjs/toolkit'

export const adSlice = createSlice({
  name: 'Ads',
  initialState: {
    ads: [],
  },
  reducers: {
    addNew: (state,action) => {
      state.value += 1
    }
  },
})


export const { addNew} = adSlice.actions;

export default adSlice.reducer
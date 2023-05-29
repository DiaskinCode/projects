import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hajjText: [],
  hajjVideo: [],

  umrahText: [],
  umrahVideo: [],
}

const riteReducer = createSlice({
  name: 'rite',
  initialState,
  reducers: {
    increment: (state,action) => {
      action.payload.type == "hajjText" ? state.hajjText.includes(action.payload.id) ? false : state.hajjText.push(action.payload.id) : false
      action.payload.type == "hajjVideo" ? state.hajjVideo.includes(action.payload.id) ? false : state.hajjVideo.push(action.payload.id) : false

      action.payload.type == "umrahText" ? state.umrahText.includes(action.payload.id) ? false : state.umrahText.push(action.payload.id) : false
      action.payload.type == "umrahVideo" ? state.umrahVideo.includes(action.payload.id) ? false : state.umrahVideo.push(action.payload.id) : false
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = riteReducer.actions

export default riteReducer.reducer
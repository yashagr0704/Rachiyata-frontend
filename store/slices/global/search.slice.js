import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    list: [],
    v: 0,
    next_page: null,
    previous_page: null,
  },
  reducers: {
    setSearchList(state, action) {
      return {
        list: action.payload.list,
        v: 1,
        next_page: action.payload.next_page,
        previous_page: action.payload.previous_page,
      }
    },
    addContentToSearchList(state, action) {
      return {
        list: [...state.list, ...action.payload.list],
        v: state.v + 1,
        next_page: action.payload.next_page,
        previous_page: action.payload.previous_page,
      }
    },
  },
})

export const { setSearchList, addContentToSearchList } = searchSlice.actions

export const selectSearchList = state => state.search

export default searchSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const chapterSlice = createSlice({
  name: 'chapterPoem',
  initialState: {
    currentChapterIndex: 0,
    list: [],
    isLoading: false,
    isFirstTimeLoaded: true,
    loadingForChapterId: null,
  },
  reducers: {
    setChapterList(state, action) {
      return {
        ...state,
        list: action.payload.map(chapter => ({
          ...chapter,
          isLoaded: false,
        })),
      }
    },

    setCurrentChapterIndex(state, action) {
      return {
        ...state,
        currentChapterIndex: action.payload,
      }
    },

    setChapterContentById(state, action) {
      return {
        ...state,
        list: state.list.map((chapter, index) => {
          if (chapter.id === action.payload.id) {
            return {
              ...chapter,
              isLoaded: true,
              ...action.payload,
            }
          }
          return chapter
        }),
      }
    },

    setChapterLoadedById(state, action) {
      return {
        ...state,
        loadingForChapterId: action.payload,
        list: state.list.map(chapter => {
          if (Number(chapter.id) === Number(action.payload)) {
            return {
              ...chapter,
              isLoaded: true,
              isLoading: true,
            }
          }
          return chapter
        }),
      }
    },
    setIsLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
        loadingForChapterId: !action.payload ? null : state.loadingForChapterId,
      }
    },
    setIsFirstTimeLoaded(state, action) {
      return {
        ...state,
        isFirstTimeLoaded: action.payload,
      }
    },
  },
})

export const {
  setChapterContentById,
  setCurrentChapterIndex,
  setChapterList,
  setChapterLoadedById,
  setIsLoading,
  setIsFirstTimeLoaded,
} = chapterSlice.actions

export const selectChapter = state => state.chapterPoem

export default chapterSlice.reducer

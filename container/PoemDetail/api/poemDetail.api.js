import { ApiInstance } from '../../../api/global.api'

export const fetchPoemDetail = poemId => {
  return ApiInstance({
    url: `poem/${poemId}`,
    method: 'GET',
  })
}

export const createPoemRating = poemId => data => {
  return ApiInstance({
    url: `/poemrate/`,
    method: 'POST',
    data: {
      poem_id: poemId,
      parameter1: Number(data.parameter1),
      parameter2: Number(data.parameter2),
      parameter3: Number(data.parameter3),
      parameter4: Number(data.parameter4),
      parameter5: Number(data.parameter5),
    },
  })
}

export const fetchCommentList = ({ poemId, commentId, sortBy }) => {
  return ApiInstance({
    method: 'GET',
    url: `/poemcomment/`,
    params: {
      poem_id: poemId,
      parent_comment_id: commentId,
      sort_by: sortBy,
    },
  })
}

export const createPoemCommentAPI = ({ poem_id, comments, parent_comment_id }) => {
  return ApiInstance({
    url: '/poemcomment/',
    method: 'POST',
    data: {
      poem_id: poemId,
      comments,
      parent_comment_id,
    },
  })
}

export const likePoemAPI = ({ poemId }) => {
  return ApiInstance({
    url: '/poemlike/',
    method: 'POST',
    data: {
      poem_id: poemId,
    },
  })
}

export const likePoemCommentAPI = ({ poemId, commentId }) => {
  return ApiInstance({
    url: '/poemlike/',
    method: 'POST',
    data: {
      poem_id: poemId,
      poem_comment_id: commentId,
    },
  })
}

export const addToLibraryAPI = poem_id => {
  return ApiInstance({
    url: '/userpoemlibrary/',
    method: 'POST',
    data: { poem_id: poem_id },
  })
}

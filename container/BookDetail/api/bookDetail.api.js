import { ApiInstance } from '../../../api/global.api'

export const fetchBookDetail = bookId => {
  return ApiInstance({
    url: `book/${bookId}`,
    method: 'GET',
  })
}

export const createBookRating = bookId => data => {
  return ApiInstance({
    url: `/bookrate/`,
    method: 'POST',
    data: {
      book_id: bookId,
      parameter1: Number(data.parameter1),
      parameter2: Number(data.parameter2),
      parameter3: Number(data.parameter3),
      parameter4: Number(data.parameter4),
      parameter5: Number(data.parameter5),
    },
  })
}

export const fetchCommentList = ({ bookId, commentId, sortBy }) => {
  return ApiInstance({
    method: 'GET',
    url: `/bookcomment/`,
    params: {
      book_id: bookId,
      parent_comment_id: commentId,
      sort_by: sortBy,
    },
  })
}

export const createBookCommentAPI = ({ book_id, comments, parent_comment_id }) => {
  return ApiInstance({
    url: '/bookcomment/',
    method: 'POST',
    data: {
      book_id,
      comments,
      parent_comment_id,
    },
  })
}

export const likeBookAPI = ({ bookId }) => {
  return ApiInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
    },
  })
}

export const likeBookCommentAPI = ({ bookId, commentId }) => {
  return ApiInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
      book_comment_id: commentId,
    },
  })
}

export const addToLibraryAPI = book_id => {
  return ApiInstance({
    url: '/userbooklibrary/',
    method: 'POST',
    data: { book_id },
  })
}

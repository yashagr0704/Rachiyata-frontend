import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import {
  addToLibraryAPI,
  createBookCommentAPI,
  createBookRating,
  fetchBookDetail,
  fetchCommentList,
  fetchCommentSection,
  likeBookAPI,
  likeBookCommentAPI,
} from './bookDetail.api'

export const useBookComment = book => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ['use-comment', book],
    () => fetchCommentSection(book),
    {
      refetchIntervalInBackground: true,
    },
  )
  return { data, isLoading, isError, error, refetch }
}

export const useAddToLibraryAPI = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess } = useMutation(addToLibraryAPI, {
    onSuccess({ data }) {
      enqueueSnackbar('Book Added to Library !', {
        variant: 'success',
      })
    },
    onError: error => {
      enqueueSnackbar('Request Failed !', {
        variant: 'error',
      })
    },
  })

  const handleAddToLibrary = mutate

  return { mutate, handleAddToLibrary, isLoading, isSuccess }
}

export const useBookCommentListAPI = ({ bookId, commentId, sortBy, ...props }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { data, isSuccess, isLoading, isError, refetch } = useQuery(
    ['comment-list', bookId, commentId, sortBy],
    () => fetchCommentList({ bookId, commentId, sortBy }),
    {
      enabled: !Boolean(props?.disableAPI),
      refetchIntervalInBackground: true,
      onError: error => {
        console.log(error)
        enqueueSnackbar('Something went wrong !', {
          variant: 'error',
        })
      },
    },
  )

  return { CommentList: data?.data?.data, isLoading, isSuccess, isError, refetch }
}

export const useCreateBookCommentAPI = ({ bookId, sortBy, ...props }) => {
  const { refetch } = useBookCommentListAPI({
    bookId: bookId,
    commentId: Boolean(props?.commentId) ? props?.commentId : null,
    sortBy: sortBy,
    disableAPI: true,
  })
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data =>
      createBookCommentAPI({
        ...data,
        book_id: bookId,
        parent_comment_id: Boolean(props?.commentId) ? props?.commentId : null,
      }),
    {
      onSuccess({ data }) {
        refetch()
        enqueueSnackbar('Your comment has been added !', {
          variant: 'success',
        })
      },
      onError: error => {
        enqueueSnackbar('Unable to post comment !', {
          variant: 'error',
        })
      },
    },
  )

  const handleCreateBookComment = mutate

  return { handleCreateBookComment, isLoading, isSuccess, isError }
}

export const useLikeBookAPI = ({ bookId, ...props }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data =>
      likeBookAPI({
        bookId,
      }),
    {
      onSuccess({ data }) {
        // setLikes(pre => pre + 1)

        enqueueSnackbar('Your like has been added !', {
          variant: 'success',
        })
      },
      onError: error => {
        enqueueSnackbar('Unable to like book !', {
          variant: 'error',
        })
      },
    },
  )

  const handleLikeBook = mutate

  return { handleLikeBook, isLoading, isSuccess, isError }
}
export const useLikeBookCommentAPI = ({ bookId, setLikes, ...props }) => {
  const { refetch } = useBookCommentListAPI({
    bookId: bookId,
    commentId: Boolean(props?.parentCommentId) ? props?.parentCommentId : null,
    disableAPI: true,
  })
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data =>
      likeBookCommentAPI({
        bookId,
        commentId: props?.commentId,
      }),
    {
      onSuccess({ data }) {
        setLikes(pre => pre + 1)
        refetch()
        enqueueSnackbar('Your like has been added !', {
          variant: 'success',
        })
      },
      onError: error => {
        enqueueSnackbar('Unable to like comment !', {
          variant: 'error',
        })
      },
    },
  )

  const handleLikeBookComment = mutate

  return { handleLikeBookComment, isLoading, isSuccess, isError }
}

export const useCreateBookRatingAPI = ({ bookId, ...props }) => {
  const { handleCreateBookComment } = useCreateBookCommentAPI({ bookId, ...props })

  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data => {
      handleCreateBookComment({ comments: data?.comments })
      return createBookRating(bookId)({ ...data, comments: undefined })
    },
    {
      onSuccess({ data }) {
        enqueueSnackbar('Your review has been posted !', {
          variant: 'success',
        })
      },
      onError: error => {
        console.log(error)
        enqueueSnackbar('Unable to post review !', {
          variant: 'error',
        })
      },
    },
  )

  const handleCreateBookRating = mutate

  return { handleCreateBookRating, isLoading, isSuccess, isError }
}

const useBookDetail = bookId => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['book-details', bookId],
    () => fetchBookDetail(bookId),
    {
      enabled: Boolean(bookId),
      onSuccess({ data }) {},
    },
  )
  return { BookDetail: data?.data?.data[0], isLoading, isError, error, isFetching }
}

export default useBookDetail

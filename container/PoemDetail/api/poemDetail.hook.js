import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import {
  addToLibraryAPI,
  createPoemCommentAPI,
  createPoemRating,
  fetchPoemDetail,
  fetchCommentList,
  fetchCommentSection,
  likePoemAPI,
  likePoemCommentAPI,
} from './poemDetail.api'

export const usePoemComment = poem => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ['use-comment', poem],
    () => fetchCommentSection(poem),
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
      enqueueSnackbar('Poem Added to Library !', {
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

export const usePoemCommentListAPI = ({ poemId, commentId, sortBy, ...props }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { data, isSuccess, isLoading, isError, refetch } = useQuery(
    ['comment-list', poemId, commentId, sortBy],
    () => fetchCommentList({ poemId, commentId, sortBy }),
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

export const useCreatePoemCommentAPI = ({ poemId, sortBy, ...props }) => {
  const { refetch } = usePoemCommentListAPI({
    poemId: poemId,
    commentId: Boolean(props?.commentId) ? props?.commentId : null,
    sortBy: sortBy,
    disableAPI: true,
  })
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data =>
      createPoemCommentAPI({
        ...data,
        poem_id: poemId,
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

  const handleCreatePoemComment = mutate

  return { handleCreatePoemComment, isLoading, isSuccess, isError }
}

export const useLikePoemAPI = ({ poemId, ...props }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data =>
      likePoemAPI({
        poemId,
      }),
    {
      onSuccess({ data }) {
        // setLikes(pre => pre + 1)

        enqueueSnackbar('Your like has been added !', {
          variant: 'success',
        })
      },
      onError: error => {
        enqueueSnackbar('Unable to like poem !', {
          variant: 'error',
        })
      },
    },
  )

  const handleLikePoem = mutate

  return { handleLikePoem, isLoading, isSuccess, isError }
}
export const useLikePoemCommentAPI = ({ poemId, setLikes, ...props }) => {
  const { refetch } = usePoemCommentListAPI({
    poemId: poemId,
    commentId: Boolean(props?.parentCommentId) ? props?.parentCommentId : null,
    disableAPI: true,
  })
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data =>
      likePoemCommentAPI({
        poemId,
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

  const handleLikePoemComment = mutate

  return { handleLikePoemComment, isLoading, isSuccess, isError }
}

export const useCreatePoemRatingAPI = ({ poemId, ...props }) => {
  const { handleCreatePoemComment } = useCreatePoemCommentAPI({ poemId, ...props })

  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data => {
      handleCreatePoemComment({ comments: data?.comments })
      return createPoemRating(poemId)({ ...data, comments: undefined })
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

  const handleCreatePoemRating = mutate

  return { handleCreatePoemRating, isLoading, isSuccess, isError }
}

const usePoemDetail = poemId => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['poem-details', poemId],
    () => fetchPoemDetail(poemId),
    {
      enabled: Boolean(poemId),
      onSuccess({ data }) {},
    },
  )
  return { PoemDetail: data?.data?.data[0], isLoading, isError, error, isFetching }
}

export default usePoemDetail

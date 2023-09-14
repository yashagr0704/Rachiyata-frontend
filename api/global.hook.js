// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchUsers } from "./global.api";

// export const useStoryApi = () => {
//   const { data, isLoading, isError, error, isFetching } = useQuery(
//     ["use-story"],
//     fetchUsers
//   );
//   return { data, isLoading, isError, error, isFetching };
// };

import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContentToSearchList, selectSearchList, setSearchList } from 'store/slices/global/search.slice'
import useLocalStorage from '../hooks/useLocalStorage'
import { fetchSearchAPI } from './global.api'

const useAuthTokens = () => {
  const [access, setAccess] = useLocalStorage('access', '', true)
  const [refresh, setRefresh] = useLocalStorage('refresh', '', true)

  return { access, refresh, setAccess, setRefresh }
}

export const useSearchList = keyword => {
  const [page, setPage] = useState(1)

  const { list, v, previous_page, next_page } = useSelector(selectSearchList)
  const dispatch = useDispatch()

  const { isLoading, isError, error, isFetching } = useQuery(
    ['Search-list', page, keyword],
    () => fetchSearchAPI(page, keyword),
    {
      onSuccess: ({ data }) => {
        if (data?.resources?.previous_page === null) {
          dispatch(
            setSearchList({
              // list: data?.data,
              list: data?.resources?.data,
              next_page: data?.resources?.next_page,
              previous_page: data?.resources?.previous_page,
            }),
          )
        } else {
          dispatch(
            addContentToSearchList({
              // list: data?.data,
              list: data?.resources?.data,
              next_page: data?.resources?.next_page,
              previous_page: data?.resources?.previous_page,
            }),
          )
        }
      },
    },
  )

  const handleNextPage = () => {
    setPage(next_page)
  }

  const handlePrevPage = () => {
    setPage(previous_page)
  }

  return { ContentList: list, handleNextPage, handlePrevPage, isLoading, isError, error, isFetching }
}

export const authTokenHandles = () => {
  const access = 'access'
  const refresh = 'refresh'

  const getAccess = typeof window !== 'undefined' ? window.localStorage.getItem(access) || '' : ''
  const getRefresh = typeof window !== 'undefined' ? window.localStorage.getItem(refresh) || '' : ''

  const setAccess = token => {
    window.localStorage.setItem(access, token)
  }

  const setRefresh = token => {
    window.localStorage.setItem(refresh, token)
  }

  return { getAccess, getRefresh, setAccess, setRefresh }
}

export default useAuthTokens

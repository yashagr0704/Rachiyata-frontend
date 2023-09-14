import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import StyledDateSelector from 'Components/form-components/StyledDateSelector'
import StyledTextField from 'Components/form-components/StyledTextField'
import { StyledModal } from 'Components/StyledModal'
import React, { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import ContentSection from './components/ContentList'
import StyledSearchBox from './components/StyledSearchBox'

const SearchModal = ({ open, setOpen }) => {
  const [SearchText, setSearchText] = useState('')
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const methods = useForm({
    defaultValues: {
      full_name: '',
      username: '',
      email: '',
      //   birth_date: null,
      bio: '',
    },
  })

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} customBarackPoint={400}>
      <Main>
        <Title variant="h4" component="div" color="secondary">
          Search Your interest...
        </Title>
        <StyledSearchBox SearchText={SearchText} setSearchText={setSearchText} />
        <ContentSection keyword={SearchText} />
      </Main>
    </Root>
  )
}

const Root = styled(StyledModal)`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Title = styled(Typography)`
  font-weight: 600;
`
const Bottom = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`
const StyledButton = styled(Button)`
  font-weight: 600;
`

export default SearchModal

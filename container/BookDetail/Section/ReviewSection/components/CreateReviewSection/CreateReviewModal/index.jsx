import React, { useCallback, useEffect } from 'react'
import styled from '@emotion/styled'

import { FormProvider, useForm } from 'react-hook-form'
import { Button, Typography } from '@mui/material'
import { StyledModal } from 'Components/StyledModal'

import { useSelector } from 'react-redux'
import { useUpdateProfileAPI } from 'Container/UserProfile/api/userProfile.hook'

import StyledTextField from 'Components/form-components/StyledTextField'
import StyledRatingField from './components/StyledRatingField'
import { useCreateBookRatingAPI } from 'Container/BookDetail/api/bookDetail.hook'

const CreateReviewModal = ({ open, setOpen, bookId }) => {
  const { handleCreateBookRating, isLoading, isSuccess } = useCreateBookRatingAPI({ bookId })
  const { data } = useSelector(store => store.user)

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const methods = useForm({
    defaultValues: {
      parameter1: 0,
      parameter2: 0,
      parameter3: 0,
      parameter4: 0,
      parameter5: 0,
    },
  })

  useEffect(() => {
    methods.reset({
      parameter1: 0,
      parameter2: 0,
      parameter3: 0,
      parameter4: 0,
      parameter5: 0,
    })
  }, [open, data, methods])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} customBarackPoint={400}>
      <Main>
        <Title variant="h4" component="div" color="secondary">
          Share your experience
        </Title>
        <FormProvider {...methods}>
          <StyledRatingField label="Writing Quality" name="parameter1" />
          <StyledRatingField label="Stability of Updates" name="parameter2" />
          <StyledRatingField label="Story Development" name="parameter3" />
          <StyledRatingField label="Character Design" name="parameter4" />
          <StyledRatingField label="World Background" name="parameter5" />
          <StyledTextField name="comments" label="Your thoughts here..." placeholder="Bio here..." multiline />
        </FormProvider>

        <Bottom>
          <StyledButton variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </StyledButton>
          <StyledButton variant="contained" onClick={methods.handleSubmit(handleCreateBookRating)}>
            Save
          </StyledButton>
        </Bottom>
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

const FieldGroup = styled.form`
  gap: 0.2em;
  display: flex;
  flex-direction: column;
`

export default CreateReviewModal

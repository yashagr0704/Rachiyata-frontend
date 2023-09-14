import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { mobileL, mobileM, tabletS } from 'styles/mediaQuery/breakPoints'

const GetStartedInputField = () => {
  const { register, handleSubmit } = useForm()
  const { push } = useRouter()

  const handleRedirectToLoginPage = useCallback(
    data => {
      const { email } = data
      localStorage.setItem('new-email', email)
      push('/create-account')
    },
    [push],
  )

  return (
    <Root>
      <InputField placeholder="Write your email here..." {...register('email')} />
      <GetStartedButton color="primary" variant="contained" onClick={handleSubmit(handleRedirectToLoginPage)}>
        GET STARTED
      </GetStartedButton>
    </Root>
  )
}

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 56px;
  border-radius: 10px;
  border: 1px solid #5624c1;
  padding-left: 5px;

  gap: 0px;
  width: 85vw;
  max-width: 700px;
  @media (max-width: 800px) {
    height: 50px;
    max-width: 520px;
  }

  @media (max-width: 650px) {
    height: 47px;
  }

  @media (max-width: 580px) {
    width: 80vw;
    padding-left: 0px;
  }

  @media (max-width: 380px) {
    height: 40px;
  }
  @media (max-width: 380px) {
    width: 87vw;
  }

  margin-top: 10px;
`

export const InputField = styled.input`
  flex: 1;
  align-self: center;
  padding: 8px 15px;
  font-weight: 600;
  height: 100%;
  border: 0px;
  background-color: transparent;
  font-size: 1.3em;
  color: gray;
  outline: 0;
  width: fit-content;
  @media (max-width: 510px) {
    font-size: 1.7em;
  }
  @media (max-width: 390px) {
    padding: 3px 10px 3px;
    font-size: 0.87rem;
    max-width: 64%;
  }
  @media (max-width: 350px) {
    font-size: 0.87rem;
  }
`

export const GetStartedButton = styled(Button)`
  height: 100%;
  white-space: nowrap;
  font-size: 1.3em;
  padding-top: 10px;
  padding-bottom: 8px;
  font-weight: 500;
  width: fit-content;
  padding-inline: 20px;
  border-radius: 0px 10px 10px 0px;
  @media (max-width: 510px) {
    font-size: 1.6em;
  }
  @media (max-width: 390px) {
    padding: 5px 10px 3px;
    font-size: 0.82rem;
  }
  @media (max-width: 350px) {
    font-size: 0.8rem;
    padding-inline: 20px;
  }
`

export default GetStartedInputField

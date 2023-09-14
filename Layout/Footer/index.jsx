import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

import LogoBox from './components/LogoBox'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'

const Footer = () => {
  return (
    <Root>
      <Main>
        <Section>
          <Heading variant="h5" component="div">
            Discover
          </Heading>
          <Link href="/">
            <a>
              <LinkButton>Home</LinkButton>
            </a>
          </Link>
          <Link href="/explore?content_type=novel&category=1&sort_by=Hot">
            <a>
              <LinkButton>Explore</LinkButton>
            </a>
          </Link>
          <Link href="/ranking?content_type=novel&category=1">
            <a>
              <LinkButton>Ranking</LinkButton>
            </a>
          </Link>
        </Section>
        <Divider />
        <Section>
          <Heading variant="h5" component="div">
            Create
          </Heading>
          <Link href="/">
            <a>
              <LinkButton>Novel</LinkButton>
            </a>
          </Link>
          <Link href="/explore?content_type=novel&category=1&sort_by=Hot">
            <a>
              <LinkButton>Poem</LinkButton>
            </a>
          </Link>
          <Link href="/ranking?content_type=novel&category=1">
            <a>
              <LinkButton>Stories</LinkButton>
            </a>
          </Link>
        </Section>
        <Divider />
        <Section>
          <Heading variant="h5" component="div">
            About us
          </Heading>
          <Link href="/privacy-policy">
            <a>
              <LinkButton>Privacy Policy</LinkButton>
            </a>
          </Link>
          <Link href="/terms-and-conditions">
            <a>
              <LinkButton>Terms and Conditions</LinkButton>
            </a>
          </Link>
        </Section>
        <Extra />
        <Divider />
        <Section>
          <Heading variant="h5" component="div">
            Follow us
          </Heading>

          <SocialLinks>
            <BsFacebook size={35} color="#673CCB" />
            <FaInstagramSquare size={35} color="#673CCB" />
            <AiFillTwitterCircle size={37} color="#673CCB" />
          </SocialLinks>
          <LogoBox />
          <Description variant="subtitle2">
            E-book is the world’s leading community for creatives to share, grow, and get hired.
          </Description>
        </Section>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  background: ${({ theme }) => theme.palette.primary.main}18;
  display: flex;
  padding: 30px 20px;
  justify-content: center;
`

const Main = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: 80px 80px 160px 260px;

  justify-content: space-between;

  @media (min-width: 1080px) {
    justify-content: start;
    grid-gap: 80px;
    grid-template-columns: 80px 80px 160px 1fr 360px;
  }

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
  max-width: 1620px;
  width: 100%;
  margin-inline: 50px;
  @media (max-width: 1000px) {
    margin-inline: 30px;
  }
  @media (max-width: 435px) {
    margin-inline: 15px;
  }
  @media (max-width: 405px) {
    margin-inline: 15px;
  }
`

const Extra = styled.div`
  display: none;
  @media (min-width: 1080px) {
    display: block;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const LinkButton = styled(Button)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px;
  border-radius: 4px;
  padding: 1px 0px 0px;
  line-height: 1;
  margin-block: 6px;
  min-width: auto;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Heading = styled(Typography)`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Description = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main}a5;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.palette.secondary.main}a0;
  margin-block: 10px;

  @media (min-width: 860px) {
    display: none;
  }
`

export default Footer

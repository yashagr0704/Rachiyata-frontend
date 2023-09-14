import styled from '@emotion/styled'

export const mainMaxWidth = 920

export const Root = styled.div`
  margin-top: 70px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  color: black;
  background: linear-gradient(180deg, rgba(102, 59, 203, 0.15) 0%, rgba(102, 59, 203, 0) 100%);
  --main-max-width: ${mainMaxWidth}px;
  --main-side-spacing: 50px;
  @media (max-width: 1000px) {
    --main-side-spacing: 30px;
  }
  @media (max-width: 435px) {
    --main-side-spacing: 15px;
  }
  @media (max-width: 405px) {
    --main-side-spacing: 15px;
  }
`

import styled from '@emotion/styled'

export const mainMaxWidth = 1240

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  --main-max-width: ${mainMaxWidth}px;
  --main-side-spacing: 30px;
  @media (max-width: 1000px) {
    --main-side-spacing: 30px;
  }
  @media (max-width: 660px) {
    --main-side-spacing: 20px;
  }
  @media (max-width: 480px) {
    --main-side-spacing: 15px;
  }
  margin-bottom: 25px;
`

export const MainContainer = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 90px;
`

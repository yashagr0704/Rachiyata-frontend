import styled from '@emotion/styled'

export const mainMaxWidth = 1720

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
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: ${({ page }) => page === 'ranking' && '15px'};
  }

  @media (max-width: 400px) {
    gap: ${({ page }) => page === 'ranking' && '5px'};
  }
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

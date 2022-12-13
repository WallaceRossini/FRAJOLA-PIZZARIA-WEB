import styled from 'styled-components'

export const Container = styled.header`
  background: #FFBA08;
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  padding: 10px;

  .page-details {

    text-align:center;
    text-transform:uppercase;

    h1 {
      color: #FFF;
      font-size: 32px;
      border-bottom: 2px solid #B11F16;
    }

    h2 {
      color: #000;
    }
  }

  img {
    height: 10vh;
  }
`

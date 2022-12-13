import styled from 'styled-components'

export const Board = styled.div`
  padding: 16px;
  border-radius:16px;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  // grid-template-rows: 50px 50px;
  grid-gap: 5px;
  flex: 1;
  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const ProductsContainer = styled.div`
    padding: 10px;
    border-radius: 20px;
    align-items: center;
    display: flex;
    flex-direction:column;
    height: auto;
    min-height: 320px;
    border: 1px solid #EEE;
    margin: 24px;
    justify-content: space-between;
    gap: 6px;

    img {
      height: 150px;
    }

    .name {
      font-size: 16px;
      text-transform: uppercase;
    }

    .description {
      text-align: center;
      font-size: 14px;
    }

    .price {
      font-weight: 500;
      font-size: 24px;
    }

    button {
      background: #9D0208;
      border: 0px;
      height: 35px;
      width: 100%;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      strong {
        font-weight: 600;
        color: #FFF;
        text-transform: uppercase;
      }
    }
`

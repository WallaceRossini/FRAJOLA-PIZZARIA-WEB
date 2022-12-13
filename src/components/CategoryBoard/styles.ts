import styled from 'styled-components'

export const Board = styled.div`
height: 80px;
width: 100%;
max-width: 1216px;
display: flex;
align-items: center;
padding: 16px;
`

export const CategoryContainer = styled.div`
  display: flex;
  margin-left: 24px;
  width: auto;

  button {
    width: 100%;
    padding: 6px;
    border: 2px solid #EEE;
    background: transparent;
    border-radius: 10px;
  }

  .action {
    border: 2px solid #9D0208;
  }

  strong {
    font-size: 16px;
    text-transform:uppercase;
  }

`

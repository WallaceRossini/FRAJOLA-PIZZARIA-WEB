import { Product } from '../../types/Product'
import { formatCurrency } from '../utils/formatCurrency'
import { Board, ProductsContainer } from './styles'

interface ProductBoardProps {
  products: Product[]
}

export function ProductBoard({products}: ProductBoardProps){
  return (
    <Board>
      {products.map(({id,name,description,image,price}) => (
        <ProductsContainer key={id}>
          <img src={`http://127.0.0.1:4000/uploads/${image}`} />
          <strong className='name'>{name}</strong>
          <span className='description'>{description}.</span>
          <span className='price'>{formatCurrency(Number(price))}</span>
          <button type='button'>
            <strong>Comprar</strong>
          </button>
        </ProductsContainer>
      ))}
    </Board>
  )
}

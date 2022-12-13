import { useState, useEffect } from 'react'
import { Category } from '../../types/Cateogry'
import { Product } from '../../types/Product'
import { CategoryBoard } from '../CategoryBoard'
import { ProductBoard } from '../ProductBoard'
import { api } from '../utils/api'
import { Container } from './styles'

export function Products() {

  const [products, setProducts] = useState<Product[]>([])
  const [categories,setCategories] = useState<Category[]>([])

  useEffect(()=> {

    api.get('/products').then(({data}) => {
      setProducts(data)
    })

    api.get('/categories').then(({data}) => {
      const category = {
        id: 0,
        name:'Todos',
        icon:'🍴'
      }

      setCategories([category,...data])
    })
  },[])

  async function handleSelectCategory(categoryId: number | null){


    const route = (!categoryId)
      ? '/products'
      : `/categories/${categoryId}/products`

    const {data} = await api.get(route)

    setProducts(data)
  }

  return (
    <Container>
      <CategoryBoard categories={categories} onSelectedCategory={handleSelectCategory}/>
      <ProductBoard products={products} />
    </Container>
  )
}

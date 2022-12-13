import { Category } from '../../types/Cateogry'
import { Board, CategoryContainer } from './styles'
import { useState } from 'react'

interface CategoryBoardProps {
  categories: Category[];
  onSelectedCategory: (categoryId: number| null) => Promise<void>
}

export function CategoryBoard({ categories, onSelectedCategory }: CategoryBoardProps) {

  const [selectedCategory, setSelectedCategory] = useState<number| null>(0)
  const [isSelect, setIsSelect] = useState(0)

  function handleSelectedCategory(id: number) {

    const category = selectedCategory === id ? null : id
    setIsSelect(id)
    onSelectedCategory(category)
    setSelectedCategory(category)
  }
  return (
    <Board>
      {categories.map(({ id, name, icon }) => (
        <CategoryContainer key={id}>
          <button className={isSelect == id ?'action': '' } type='button' onClick={() => handleSelectedCategory(id)}>
            <strong>{icon} {name}</strong>
          </button>
        </CategoryContainer>
      ))}
    </Board>
  )
}

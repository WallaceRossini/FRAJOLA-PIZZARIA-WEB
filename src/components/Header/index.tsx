import logo from '../../assets/image/logo.svg'
import { Container, Content } from './styles'

export function Header(){
  return (
    <Container>
      <Content>
        <div className='page-details'>
          <h1>Frajola</h1>
          <h2>Pizzaria</h2>
        </div>
        <img src={logo} alt='Frajola Pizzaria'/>
      </Content>
    </Container>
  )
}

import styled from 'styled-components'
import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './sections/home'

const AppContainer = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
`

function App() {
  return (
    <>
      <Navbar/>
      <AppContainer>
        <Home/>
      </AppContainer>
    </>
  )
}

export default App

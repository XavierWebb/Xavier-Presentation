import styled from 'styled-components'
import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './sections/home'
import { Presentation } from './sections/presentation'
import { Knowledge } from './sections/knowledge'
import { Contact } from './sections/contact'
import { useRef } from 'react'

const AppContainer = styled.div`
  margin-left: 20rem;
  margin-right: 20rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    padding-top: 5rem;
    gap:4rem;
  }
`

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const presentationRef = useRef<HTMLDivElement | null>(null);
  const knowledgeRef = useRef<HTMLDivElement | null>(null);
  const contactReft = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        home={()=> scrollTo(homeRef)}
        presentation={()=> scrollTo(presentationRef)}
        knowledge={()=> scrollTo(knowledgeRef)}
        contact={()=> scrollTo(contactReft)}
      />
      <AppContainer>
        <div ref={homeRef}><Home/></div>
        <div ref={presentationRef}><Presentation/></div>
        <div ref={knowledgeRef}><Knowledge/></div>
        <div ref={contactReft}><Contact/></div>
      </AppContainer>
    </>
  )
}

export default App

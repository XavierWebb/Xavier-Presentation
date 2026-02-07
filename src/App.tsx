import './App.css';
import styled from 'styled-components';
import { Navbar } from './components/navbar';
import { Projects } from './sections/projects';
import { Contact } from './sections/contact';
import { useRef } from 'react';
import { Stack } from './sections/stack';
import AnimatedBackground from './components/animatedBackground';

const AppContainer = styled.div`
  margin-left: 20rem;
  margin-right: 20rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    padding-top: 5rem;
    gap:10rem;
  }
`

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const contactReft = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatedBackground/>
      <Navbar
        stack={()=> scrollTo(stackRef)}
        projects={()=> scrollTo(projectsRef)}
        contact={()=> scrollTo(contactReft)}
      />
      <AppContainer>
        <div ref={projectsRef}><Projects/></div>
        <div ref={stackRef}><Stack/></div>
        <div ref={contactReft}><Contact/></div>
      </AppContainer>
    </>
  )
}

export default App

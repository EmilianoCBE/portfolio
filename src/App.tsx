import './App.css'
import { Footer, Navbar, Separator } from './components'
import { Contact, Experience, Hero, Projects } from './sections'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Separator />
        <Projects />
        <Separator />
        <Experience />
        <Separator />
        <Contact />
        <Separator />
      </main>
      <Footer />
    </>
  )
}

export default App

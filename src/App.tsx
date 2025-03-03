import './App.css'
import { Footer, Navbar, Separator } from './components'
import { Experience, Hero, Projects } from './sections'

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
      </main>
      <Footer />
    </>
  )
}

export default App

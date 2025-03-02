import './App.css'
import { Footer, Navbar, Separator } from './components'
import { Hero, Projects } from './sections'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Separator />
        <Projects />
        <Separator />
      </main>
      <Footer />
    </>
  )
}

export default App

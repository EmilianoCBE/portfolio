import './App.css'
import { Navbar, Separator } from './components'
import { Hero } from './sections'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Separator />
        <Hero />
        <Hero />
        <Hero />
      </main>
    </>
  )
}

export default App

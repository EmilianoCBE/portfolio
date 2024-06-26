import "./App.css";
import { HomePage } from "./pages/HomePage";
import "@fontsource-variable/onest";
import { SpeedInsights } from "@vercel/speed-insights/react"

// Agradecimientos a Carlos 'Charly' Ruiz por su ayuda en la creación de este proyecto.

function App() {
  return (
      <>
        <div className="stars"></div>
        <HomePage />
        <SpeedInsights/>
      </>
  );
}

export default App;

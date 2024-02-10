import AppClima from "./components/AppClima"
import Formulario from "./components/Formulario"
import { ClimaProvider } from './context/ClimaProvider'




function App() {

  return (
  <ClimaProvider>
    <header><h1>Buscar Doble Click</h1></header>
    <AppClima/>
    </ClimaProvider>

   
  )
}

export default App

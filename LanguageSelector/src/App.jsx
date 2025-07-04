import './App.css'
import LanguageSelector from './Component/LanguageSelector'
import { LangProvider } from './Context/LangContext'

function App() {

  return (
    <>
     <LangProvider>
      <LanguageSelector/>
     </LangProvider>
    </>
  )
}

export default App

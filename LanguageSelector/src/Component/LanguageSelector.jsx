import { useContext } from "react"
import { langContext } from "../Context/LangContext"
import '../Component/lang.css'

function LanguageSelector() {

  const {lang,setLang} = useContext(langContext)
  console.log(lang)

const handleChange=(e)=>{
  setLang(e.target.value)
}

const greetings ={
  en:'Hello',
  es:'Hola',
  fr:'Bonjour'
}

const farewell ={
  en:'GoodBye !',
  es:'Adios !',
  fr:'Au revoir !' 
}

  return (
    <div className="container">
      <label htmlFor="langSelector">Select Laguage:</label>
        <select name="Lang" id="" onChange={handleChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select><br/>
        <p>{lang === 'en' && <div>Greeting:{greetings.en} <br/>Farewell: {farewell.en}</div>}</p>
        <p>{lang === 'es' && <div>Greeting:{greetings.es} <br/>Farewell: {farewell.es}</div>}</p>
        <p>{lang === 'fr' && <div>Greeting:{greetings.fr} <br/>Farewell: {farewell.fr}</div>}</p>
        
    </div>
  )
}

export default LanguageSelector
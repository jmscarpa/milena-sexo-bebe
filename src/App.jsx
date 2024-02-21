import { useState } from 'react'
import './App.css'

import icon from './assets/icon.png'
import girl from './assets/girl.png'

function App() {

  const [showAnswer, setShowAnswer] = useState(false)

  if (showAnswer) {
    return (
      <div className="background fade-in">
        <img src={girl} alt="Ícone de um bebê" className="icon-answer" />
        <h1 className="answer custom-font">É uma menina!</h1>
        <p className="message custom-font">Mamãe e Papai estão muito felizes com a minha chegada!</p>
        <a href="https://wa.me/5512996517183" target="_blank" rel="noreferrer">
          <button className="whatsapp">Mande uma mensagem para mim</button>
        </a>
      </div>
    )
  }

  return (
    <div className="background">
      <img src={icon} alt="Ícone de um bebê" width={256}/>
      <h1 className="custom-font">A família está crescendo e a gente quer saber...</h1>
      <div className="buttons">
        <button className="its-a-boy" onClick={() => setShowAnswer(true)}>É um menino</button>
        <button className="its-a-girl" onClick={() => setShowAnswer(true)}>É uma menina</button>
      </div>
    </div>
  )
}

export default App

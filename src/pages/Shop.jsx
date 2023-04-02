import React from "react"
import useWordGame from "../components/GameContent/useWordGame"
import "./Game.css"
import Header from "../components/Header"

export default function Shop() {
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useWordGame()

  return (

    
    <div className="containerr">
      <Header />
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h4>Word count: {wordCount}</h4>
    </div>
  )
}
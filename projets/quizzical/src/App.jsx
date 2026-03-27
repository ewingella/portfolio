import { useState } from 'react'
import { decode } from 'he'
import Start from './components/start'
import Quizz from './components/Quizz'
import './App.css'
// lien api qui marche 

// App.jsx - Gère l'état global du jeu
function App() {
  const [gameState, setGameState] = useState("start") // "start" | "playing" | "finished"
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  
  // Gestion de la sélection des réponses
  function handleAnswerSelect(questionId, answerIndex) {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }
   // Fonction pour appeler l'API
  async function fetchQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple')
    const data = await response.json()
    return data.results
  }
  // Fonction pour mélanger les réponses algorithme de Fisher-Yates
  function shuffleArray(array) {
    const shuffled = [...array] // Créer une copie
    let j;// j ne doit pas etre une constante pour eviter les erreurs de redeclaration dans la boucle
    for (let i = shuffled.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled
  }
  
 // Déclenché par le bouton Start
  async function startQuiz() {
    setSelectedAnswers({}) // Reset des réponses
    const apiQuestions = await fetchQuestions("https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple") // Appel API
    console.log(apiQuestions)
    // Traiter les questions (mélanger réponses, etc.)
    const processed = apiQuestions.map(q => ({
      question: decode(q.question),
      answers: shuffleArray([decode(q.correct_answer), ...q.incorrect_answers.map(decode)]),
      correctAnswer: decode(q.correct_answer)
    }))
    
    setQuestions(processed)
    setGameState("playing")
  }
  
  function finishQuiz() {
    let finalScore = 0
    questions.forEach((q, index) => {
      if (q.correctAnswer === q.answers[selectedAnswers[index]]) {
        finalScore++
      }
    })
    setScore(finalScore)
    setGameState("finished")
  }
  
  function restartQuiz() {
    setGameState("start")
    setQuestions([])
  }
  
  return (
    <>
      {gameState === "start" && <Start onStart={startQuiz} />}
      {gameState === "playing" && <Quizz 
        questions={questions} 
        mode="playing" 
        selectedAnswers={selectedAnswers}
        onAnswerSelect={handleAnswerSelect}
        onFinish={finishQuiz}
         />}
      {gameState === "finished" && <Quizz 
        questions={questions} 
        score={score} 
        mode="finished" 
        selectedAnswers={selectedAnswers}
        onRestart={startQuiz}
         />}
    </>
  )
}
export default App

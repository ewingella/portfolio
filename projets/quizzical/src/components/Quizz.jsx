import Question from "./Question";


// Quiz.jsx
function Quizz({ questions, selectedAnswers, onAnswerSelect, onFinish, onRestart, score, mode }) {
    const isPlaying = mode === "playing"
    const isResults = mode === "finished"


    return (
      


         <div className="quiz app">
      {questions.map((q, index) => (
        <Question
          key={index}
          questionId={index}
          question={q.question}
          answers={q.answers}
          correctAnswer={q.correctAnswer}
          selectedAnswer={selectedAnswers[index]}
          onAnswerSelect={isPlaying ? onAnswerSelect : null}
          showResults={isResults}  // Afficher vert/rouge
          disabled={isResults}     // Désactiver les clics
        />
      ))}
      
      {isPlaying && <button onClick={onFinish}>Vérifier</button>}
      {isResults && (
        <>
          <p className="score">You scored {score}/5 correct answers</p>
          <button onClick={onRestart}>Rejouer</button>
        </>
      )}
    </div>
    )
}

export default Quizz;
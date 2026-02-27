function Question({ questionId, question, answers, correctAnswer, selectedAnswer, onAnswerSelect, showResults, disabled }) {

    function getButtonClass(answerIndex) {
        if (showResults) {
          const currentAnswer = answers[answerIndex]
          if (selectedAnswer === answerIndex && currentAnswer !== correctAnswer) {
                return "incorrect"
            }
          if (currentAnswer === correctAnswer) {
                return "correct"
            }
            return ""
        }
        // Mode jeu : sélectionné ou pas
        return selectedAnswer === answerIndex ? "selected" : ""
    }   




    return (
        <div className="question">


            <h3>{question}</h3>
            <div className="answers">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className={getButtonClass(index)}
                        onClick={() => onAnswerSelect?.(questionId, index)}
                        disabled={disabled}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question;
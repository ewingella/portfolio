
function Start({ onStart }){
    return(
        <div className="start-screen app">
            <h1>QUIZZICAL</h1>
            <p>Test your knowledge about vehicles</p>
            <button className="start-button" onClick={onStart}>Start Quiz</button>

        </div>
    )

}

export default Start;
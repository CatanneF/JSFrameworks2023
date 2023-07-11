import { useState } from 'react'; 

const GuessTheNumber = () => {
    const [guess, setGuess] = useState(0);
    const [text, setText] = useState("")
    const [answer, setAnswer] = useState(35)

    const checkGuess = (guess) => {
        if (guess === answer) {
            setText("Congrats, you guessed correctly");
            resetGame()
        } else if (guess > answer) {
            setText("Your guess is too high")
        } else {
            setText("Your guess is too low")
        }
    }
    const resetGame = () => {
        setAnswer(Math.floor(Math.random() * 999))
        console.log(answer)
    }
    
    return (
        <>
            <form action="">
                <input 
                    type="text"
                    onChange={(e) => setGuess(e.target.value)}
                />
                <button onClick={checkGuess}>Guess</button>
                <button onClick={resetGame}>Reset Game</button>
            </form>
            <p>{text} {guess} {answer}</p>
        </>
    )
 
};

export default GuessTheNumber
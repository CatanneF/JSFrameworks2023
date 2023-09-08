import { useState } from 'react'; 

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const GuessTheNumber = () => {
    const [guess, setGuess] = useState(0);
    const [text, setText] = useState("")
    const [answer, setAnswer] = useState(getRandomNumber());

    const checkGuess = () => {
        if (guess === "") {
            setText("Please enter a number!");
            return;
          }
      
        const intUserGuess = parseInt(guess, 10);

        if (intUserGuess > answer) {
            setText(`Your guess is too high The correct number was ${answer}`);
            resetGame()
        } else if (intUserGuess < answer) {
            setText(`Your guess is too low The correct number was ${answer}`)
        } else {
            setText("Congrats, you guessed correctly")
        }
    }
    const resetGame = () => {
        setGuess("");
        setText("");
        setAnswer(getRandomNumber())
    }
    
    return (
        <>
            <div action="">
                <input 
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />
                <button onClick={checkGuess}>Guess</button>
                <p>{text}</p>
                <button onClick={resetGame}>Reset Game</button>
            </div>
            
        </>
    )
 
};

export default GuessTheNumber
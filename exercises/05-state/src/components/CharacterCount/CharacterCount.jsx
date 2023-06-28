import { useState } from 'react'; 

const CharacterCounter = (props) => {
    const [count, setCount ] = useState(0);
    return (
        <>
        <h2>Returns the amount of letters you type</h2>
        <form action="">
            <input 
                type="text"
                onChange={(e) => setCount((e.target.value).length)}
            />

            
        </form>
        <p>Number of Letters: {count}</p>
        </>
    )
}

export default CharacterCounter
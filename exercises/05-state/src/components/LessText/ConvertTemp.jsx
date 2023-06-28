import { useState } from 'react';

const ConvertTemp = (props) => {
    const[convert, setConvert] = useState(props.temp);
    return (
        <>
        <p>{!convert ? (props.temp - 32) * (5/9) : props.temp}</p>
        <button onClick={() => setConvert(true)}>Convert to Farenheit</button>
        <button onClick={() => setConvert(false)}>Convert to Celcius </button>
        </>
        
        
    )
}

export default ConvertTemp
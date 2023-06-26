import { useState } from 'react';
 
const LessText = (props) => {
    const [text, setText] = useState(props.text);
    return(   
        <>
        <p>
            {text}
        </p>
        <button onClick={() => setText(props.text)}>Read More</button> 
        <button onClick={() => setText(text.substring(0,props.maxLength))}>Read Less</button>
         

    </>
    )
    
}

export default LessText;
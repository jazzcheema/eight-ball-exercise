import {sample} from 'lodash'
import { useState } from 'react';
import './Eightball.css'


function EightBall({answers}){

    const[answer, setAnswer] = useState('Think of a Question')
    const[push, setPush] = useState(false)

    let randomAnswer = sample(answers)


    function handleClick(evt){
        setAnswer(sample(answers).msg)
        setPush(true)
    }


    return(
        <div>
            <button className='Eightball' onClick = {handleClick}

            style = {{backgroundColor: randomAnswer.color}}>
                {answer}
                </button>
        </div>
    )




}





export default EightBall
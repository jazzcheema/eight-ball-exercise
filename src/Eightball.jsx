import { sample } from 'lodash';
import { useState } from 'react';
import './Eightball.css';
import { answersList } from './AnswersList.jsx';


/** EightBall Game. shows a different message on each click
 *
 * Props:
 * -answers
 *
 * State:
 * -answer: An object contains two keys msg and color.
 *
 * App => EightBall
 */
function EightBall({ answers = answersList }) {
    const [answer, setAnswer] = useState({ msg: 'Think of a Question', color: 'black' });
    const [ballColor, setBallColor] = useState({green: 0, red: 0, goldenrod:0})

    function handleClick(evt) {
        let randomAnswer = sample(answers);
        setAnswer(randomAnswer);
        if(randomAnswer.color === 'green'){
            ballColor.green += 1
            setBallColor(ballColor)
        }
        if(randomAnswer.color === 'red'){
            ballColor.red += 1
            setBallColor(ballColor)
        }
        if(randomAnswer.color === 'goldenrod'){
            ballColor.goldenrod += 1
            setBallColor(ballColor)
        }
    }

    function resetBall(evt){
        setAnswer({msg:'Think of a Question', color: 'black'})
    }


    return (
        <div className='Eightball-div'>
            <button className='Eightball' onClick={handleClick}

                style={{ backgroundColor: answer.color }}>
                {answer.msg}
            </button>
            <br/>
        <br/>
        <br/>
            <p>Colors: Green {ballColor.green} Goldenrod {ballColor.goldenrod} Red {ballColor.red}</p>
            <button className='Eightball-reset' onClick={resetBall}>Reset</button>
        </div>
    );




}





export default EightBall;
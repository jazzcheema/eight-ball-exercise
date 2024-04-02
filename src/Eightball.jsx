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


    function handleClick(evt) {
        let randomAnswer = sample(answers);
        setAnswer(randomAnswer);
    }


    return (
        <div>
            <button className='Eightball' onClick={handleClick}

                style={{ backgroundColor: answer.color }}>
                {answer.msg}
            </button>
        </div>
    );




}





export default EightBall;
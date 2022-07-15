import React, { useEffect, useState } from 'react';

import './timer.css'



const Timer = (props) => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const newTimer = setInterval(() => setTimer(timer + 1), 1000);

        return () => {
            clearInterval(newTimer);
        }
    }, [timer]);

    return (
    <button style={{"background-color": timer < props.timeLimit ? props.color : 'white'}} className={timer < props.timeLimit ? 'timer-button' : 'timer-outlined'} onClick={() => setTimer(0)}>{timer}</button>
    )
};

export default Timer;

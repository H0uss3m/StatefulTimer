import React  from 'react';
import './Timer.css';
const timeConvert = ms => {
    const msPerSecond=1000
    const msPerMinute=(msPerSecond*60)
    const msPerHour=(msPerMinute*60)

    const hour=Math.floor(ms/msPerHour)
    const restHours=(ms%msPerHour)
    const min=Math.floor(restHours/msPerMinute)
    const restMins=(ms%msPerMinute)
    const sec=Math.floor(restMins/msPerSecond)

    return String(hour).padStart(2,'0')+
    ':'+String(min).padStart(2,'0')+
    ':'+String(sec).padStart(2,'0')
} 
const Timer = ({ms}) => {
        return (
        <div>
            <div className='TimerContainer'>
                {timeConvert(ms)}
            </div>
            <div className='text'>
                <h4>Hour : Minute : Second</h4>
            </div>
        </div>
        )
}
 
export default Timer;
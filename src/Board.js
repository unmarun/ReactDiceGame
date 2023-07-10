import Dice from './Dice';
import './Board.css';

function Board({name, color, gameHistory}){
        const num = gameHistory[gameHistory.length -1] || 1;
        const sum = gameHistory.reduce((a,b) => a + b, 0);
    return (
    <div className='Board'>
        <div>
           <h2>{name}</h2>
        <Dice color={color} num={num}/>
           <h2>총점</h2>
           <p>{sum}</p>
           <h2>기록</h2>
           <p>{gameHistory.join(', ')}</p>
        </div>
    </div>
    );
}
export default Board;
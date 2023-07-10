import Board from './Board';
import Button from './Botton';
import { useState } from 'react';
import './App.css';
import AppLogo from './assets/logo.png';

function random(n){
    return Math.ceil(Math.random() * n)
}

function App(){
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6)
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };
    const handleClearClick = () => {
       setMyHistory([]);
       setOtherHistory([]);
    };

    return (
        <div className='App'>
            <div className='App-title'>주사위 게임</div>    
             <img class="App-logo" src={AppLogo} alt="주사위게임 로고" />
            <div>
            <Button className='App-button' color='blue' onClick={handleRollClick}>던지기</Button>
            <Button className='App-button' color='red' onClick={handleClearClick}>처음부터</Button>
         </div>
        <div className='App-boards'>
            <Board className='Board-heading' name='나' color='blue'  gameHistory = {myHistory}/>
            <Board className='' name='상대' color='red'  gameHistory = {otherHistory}/>
        </div>
        </div>
    );
}
export default App;
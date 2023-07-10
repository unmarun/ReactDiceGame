import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const product = 'MacBook';
const model = 'Air';
const item = product + model;
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Macbook_Air.png/250px-Macbook_Air.png';

function handleClick(){
    alert('곧 도착합니다.');
}

//가위바위보  승리
const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

const element = <h1>안녕 리액트!</h1>;
console.log({element});

function Hello(){
  return <h1>안녕 리액트</h1>
}

function getResult(left, right){
  if(WINS[left] == right) return '승리';
  else if(left == WINS[right]) return '패배';
  return '무승부';
}

function handleClickStart(){
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

const result1 = getResult(me, other);


  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>,
  <>
  <h1>나만의 {item} 주문하기</h1>
  <img src={imageUrl} alt='제품 사진'  /><br/>

  <button onClick={handleClick}>확인</button>
    <>
      <h1>가위바위보</h1>
      <h2 id='result'>{result1}</h2>
      <button onClick={handleClickStart}>가위</button>
      <button onClick={handleClickStart}>바위</button>
      <button onClick={handleClickStart}>보</button>
    </>
      <>
        <Hello/>
        <Hello/>
        <Hello/>
      </>
  </>,
  document.getElementById('result')
);

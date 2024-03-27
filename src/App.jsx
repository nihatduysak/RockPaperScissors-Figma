import React, { useState } from 'react';
import './App.css'
import Header from './assets/Components/Header';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const choices = ['Taş', 'Kağıt', 'Makas'];
  const [choiceVisible, setChoiceVisible] = useState(false);

  const choicesImages = {
    'Taş': '/images/rock.png',
    'Kağıt': '/images/paper.png',
    'Makas': '/images/scissors.png',
  };

  const handleClick = (choice) => {
    setChoiceVisible(true);
    setUserChoice(choice);

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    if (choice === 'Taş') {
      if (randomChoice === 'Taş') {
        setResult('Berabere');
      } else if (randomChoice === 'Kağıt') {
        setResult('Kaybettin!');
      } else {
        setResult('Kazandın!');
        setScore(score + 1);
      }
    } else if (choice === 'Kağıt') {
      if (randomChoice === 'Taş') {
        setResult('Kazandın!');
        setScore(score + 1);
      } else if (randomChoice === 'Kağıt') {
        setResult('Berabere');
      } else {
        setResult('Kaybettin!');
      }
    } else {
      if (randomChoice === 'Taş') {
        setResult('Kaybettin!');
      } else if (randomChoice === 'Kağıt') {
        setResult('Kazandın!');
        setScore(score + 1);
      } else {
        setResult('Berabere');
      }
    }
  };

  return(
    <>
      <div className={`container ${modalVisible ? 'modal-open' : ''}`}>
        <Header score={score} />
        <div className="choiceScreen">
        {!choiceVisible && (
          <>
            <div className="firstGroup">
              <img onClick={() => handleClick('Kağıt')} className='paper' src="/images/paper.png" alt="Paper Icon" />
              <img onClick={() => handleClick('Makas')} className='scissors' src="/images/scissors.png" alt="Scissors Icon" />
              <img onClick={() => handleClick('Taş')} className='rock' src="/images/rock.png" alt="Rock Icon" />
            </div>
          </>
        )}
        {choiceVisible && (
          <>
            {result && (
              <div className='resultScore'>
                <div className="choices">
                  <div className="userChoice">
                    <h3>Oyuncu : {userChoice}</h3>
                    <img src={choicesImages[userChoice]} alt="User Choice" />
                    {choiceVisible && result === 'Kazandın!' }
                  </div>
                  <div className="computerChoice">
                    <h3>Bilgisayar : {computerChoice}</h3>
                    <img src={choicesImages[computerChoice]} alt="Computer Choice" />
                    {choiceVisible && result === 'Kaybettin!' }
                  </div>
                </div>
                <div className="resultAndPlayAgain">
                  <h2>{result}</h2>
                  <button onClick={() => setChoiceVisible(false)}>YENİDEN OYNA</button>
                </div>
              </div>
            )}
          </>
          )}
          {!choiceVisible && (
            <>
              <div className="triangle">
              </div>
            </>
          )}
        </div>
        <div className="rules">
          <h3 onClick={() => setModalVisible(!modalVisible)}>KURALLAR</h3>
        </div>
      </div>
      {modalVisible && (
        <div className="rulesPage">
          <div className="rulesTop">
            <h2>KURALLAR</h2>
            <h1 onClick={() => setModalVisible(false)}>X</h1>
          </div>
          <img src="/images/rules.png" alt="Rules" />
        </div>
      )}
    </>
  )
}
import { useState } from 'react';
import questionsData from './questions.json';
import './App.css';
import Board from './components/Board';
import QuestionCard from './components/QuestionCard';


function App() {
    // can use this to have overview of the score
    // const [score, setScore] = useState(0);

    const [activeCard, setActiveCard] = useState(null);

    function handleSelectCard(categoryIndex, questionIndex, value) {
        const { question, answer } = questionsData.categories[categoryIndex].questions[questionIndex];
        setActiveCard({ categoryIndex, questionIndex, value, question, answer });
    }

    function handleBackToBoard() {
        setActiveCard(null);
    }

    function handleResult() {
        setActiveCard(null);
    }

    return (
        //game-screen is for overall layout of the game
        <div className="game-screen"> 
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board onSelectCard={handleSelectCard} />
            {activeCard && (
                <QuestionCard
                    question={activeCard.question}
                    answer={activeCard.answer}
                    value={activeCard.value}
                    onResult={handleResult}
                    onBack={handleBackToBoard}
                />
            )}
        </div>
    );
}

export default App;
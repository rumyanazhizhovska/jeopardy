import "./App.css";
import questionsData from './questions.json';
// questionsData.categories er nå en liste med alle kategoriene
import Board from './components/Board';

function App() {
    
  return (
    <div className="card">
      <h1>Jeopardy</h1>
      <Board
        
        categories={questionsData.categories}
      />
    </div> );
}

export default App;

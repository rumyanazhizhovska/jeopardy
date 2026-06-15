import "./App.css";
import questionsData from './questions.json';
// questionsData.categories er nå en liste med alle kategoriene
import Board from './components/Board';

function App() {
    
  return (
    <div className="card">
      <h1>HELLUUUU! 👋</h1>
      <p>
        <Board
          categories={questionsData.categories}
        />
      </p>
      <p>
        Du kan endre koden i <code>src/App.jsx</code>
      </p>
    </div>
  );
}

export default App;

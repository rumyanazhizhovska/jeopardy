import "./App.css";
import questionsData from './questions.json';
// questionsData.categories er nå en liste med alle kategoriene
import Board from './components/Board';

function App() {
  return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board />
        </div>
    );
    
  return (
    <div className="card">
      <h1>Velkommen! 👋</h1>
      <p>
        Du kan se koden for dette prosjektet{" "}
        <a href="https://github.com/bekk/prosjektutgangspunkt">
          i repoet på GitHub
        </a>
      </p>
      <p>
        Du kan endre koden i <code>src/App.jsx</code>
      </p>
    </div>
  );
}

export default App;

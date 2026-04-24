import './App.css';
import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <div className="page-shell">
        <header className="hero">
          <p className="eyebrow">✨ React • Hooks • Debutant</p>
          <h1>TP Hooks Avances 🚀</h1>
          <p className="hero-text">
            Une mini collection de composants colores pour pratiquer
            `useReducer`, `useRef`, `useEffect` et un hook personnalise.
          </p>
        </header>

        <main className="cards-grid">
          <section className="card card-counter">
            <h2>🧮 Compteur avec useReducer</h2>
            <Compteur />
          </section>

          <section className="card card-focus">
            <h2>🎯 Mettre le focus avec useRef</h2>
            <FocusInput />
          </section>

          <section className="card card-render">
            <h2>🔁 Compteur de rendus</h2>
            <CompteurRendu />
          </section>

          <section className="card card-fetch">
            <h2>📰 Liste d'articles avec useFetch</h2>
            <ListeArticles />
          </section>

          <section className="card card-timer">
            <h2>⏱️ Timer avec nettoyage d'effet</h2>
            <Timer />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

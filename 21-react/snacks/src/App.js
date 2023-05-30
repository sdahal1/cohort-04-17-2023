
import Header from './Header';
import './App.css';
import SnacksList from './SnacksList';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <SnacksList />
        
      </main>
    </div>
  );
}

export default App;

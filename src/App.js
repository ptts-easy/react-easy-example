import logo from './logo.svg';
import './App.css';

import MainPage from './containers/MainPage';

function App() {
  const title = "Learn React";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <MainPage />
      </header>
    </div>
  );
}

export default App;

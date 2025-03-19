import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Services de plomberie dans la métropole lilloise</h1>
          <div className="gradient-test"></div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <Routes />
        </main>
        <footer></footer>
        <div className={`"bubble-container "+ ${"home"}`}>{/** add logic to make the second class dynamic */}
          <div className="front">
            {/**NO LOGIC FOR DIV BUBBLES, ADD A GOOD OLD PNG INSTEAD */}
          </div>
          <div className="mid">

          </div>
          <div className="back">

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

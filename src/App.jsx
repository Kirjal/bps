import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={`bubble-container ${"home"}`}>{/** add logic to make the second class dynamic */}
          <div className="front">{/**NO LOGIC FOR DIV BUBBLES, ADD A GOOD OLD PNG INSTEAD */}</div>
          <div className="mid"></div>
          <div className="back"></div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="title">
              <h1>Services de plomberie dans la métropole lilloise</h1>
              <div className="title-gradient"></div>
          </div>
          <div className="text">
            <p>aaaaaaaaaaaaaaaaaaa<br/>aaaaaaa</p>
          </div>
          
        </header>
        <main>
          <Routes />
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

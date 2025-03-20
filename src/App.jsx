import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from "./routes/Routes";
import { URL_CONTACT, URL_HOME, URL_SERVICES } from './constants/url';


function App() {

  /**bubble logic **************************************************************************/
  const updateBubbleMode = (value) => {
    document.getElementById("bubbles").classList.remove("services", "contact");
    document.getElementById("bubbles").classList.add(value);
  };

  const bubbles = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];

  const generateBubblesFront = bubbles.map((height, i) => {
    return(
      <div className="bubble bubble_front" style={{top: height + Math.random() * 4 - 2 + "%", left: Math.random() * 125 +  "px"}} key={i}></div>
    )
  });
  const generateBubblesMid = bubbles.map((height, i) => {
    return(
      <div className="bubble bubble_mid" style={{top: height + Math.random() * 4 + "%", left: Math.random() * 100 + 25 + "px"}} key={i}></div>
    )
  });
  const generateBubblesBack = bubbles.map((height, i) => {
    return(
      <div className="bubble bubble_back" style={{top: height + Math.random() * 4 + 2 + "%", left: Math.random() * 75 + 50 + "px"}} key={i}></div>
    )
  })
  /**********************************************************************************************/

  
  return (
    <div className="App">
      <div className={"bubble-container"} id="bubbles">
        <div className="front">
          {generateBubblesFront}
        </div>
        <div className="mid">
          {generateBubblesMid}
        </div>
        <div className="back">
          {generateBubblesBack}
        </div>
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
        <button><Link to={URL_HOME} onClick={()=>updateBubbleMode("home")}>home</Link></button>
        <button><Link to={URL_SERVICES} onClick={()=>updateBubbleMode("services")}>services</Link></button>
        <button><Link to={URL_CONTACT} onClick={()=>updateBubbleMode("contact")}>contact</Link></button>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

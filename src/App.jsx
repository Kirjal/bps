import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from "./routes/Routes";
import { URL_CONTACT, URL_HOME, URL_SERVICES } from './constants/url';


function App() {

  /**bubble logic **************************************************************************/

  /**adds or remove a specific class to the container of the background bubbles to calculate Y axis offset (to give the illusion of a water current) */
  /**did not find yet how to set the value on page load by using URL params without causing a refresh of the App component on every URL change */
  const updateBubbleMode = (value) => {
    document.getElementById("bubbles").classList.remove("services", "contact");
    document.getElementById("bubbles").classList.add(value);
  };

  /**arbitrary values corresponding to the %age of Y axis offset of each set of bubbles */
  /*const bubbles = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];*/
  const bubbles = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100];

  /**slightly randomised top and left properties for each bubble on page load */
  const generateBubblesFront = bubbles.map((height, i) => {
    return(
      <div className="bubble bubble_front" style={{top: height + Math.random() * 3 - 1.5 + "%", left: Math.random() * 125 +  "px"}} key={i}></div>
    )
  });
  const generateBubblesMid = bubbles.map((height, i) => {
    return(
      <div className="bubble bubble_mid" style={{top: height + Math.random() * 3 + "%", left: Math.random() * 100 + 25 + "px"}} key={i}></div>
    )
  });
  const generateBubblesBack = bubbles.map((height, i) => {
    return(
      <div className="bubble bubble_back" style={{top: height + Math.random() * 3 + 1.5 + "%", left: Math.random() * 75 + 50 + "px"}} key={i}></div>
    )
  })
  /**********************************************************************************************/

  
  return (
    <div className="App">
      <div className={"bubble-container"} id="bubbles">
        <div className="bg-gradients"></div>
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
          
      </header>
      <main>
        <div className="main-bg-gradient"></div>
        <div className="title-container">
          <div className="title">
            <h1>Services de plomberie dans la métropole lilloise</h1>
          </div>
          <div className="title-gradient"></div>
        </div>
        <div className="text">
          <p>aaaaaaaaaaaaaaaaaaa<br/>aaaaaaa</p>
        </div>
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

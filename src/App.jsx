import logo from './assets/images/bps_logo_temp.png';
import rge from './assets/images/bps_logo_temp.png';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from "./routes/Routes";
import * as URL from './constants/url';
import { useEffect, useRef } from 'react';


function App() {

  /**bubble logic **************************************************************************/
  const initialBubbleMode = window.location.pathname;

  /**adds or remove a specific class to the container of the background bubbles to calculate Y axis offset (to give the illusion of a water current) */
  const updateBubbleMode = (value) => {
    const bubbleContainer = document.getElementById("bubbles");
    const contactButton = document.getElementById("contact-button");
    const header = document.getElementById("header");
    const main = document.getElementById("main");

    bubbleContainer.classList.remove("services", "contact");
    bubbleContainer.classList.add(value);
    if(value === "contact" && contactButton.classList.contains("visible")){
      contactButton.classList.remove("visible");
    } else if(value !== "contact" && !contactButton.classList.contains("visible")){
      contactButton.classList.add("visible");
    }

    header.classList.contains("nav-open") && toggleNav();

    main.classList.add("hidden", "left");
    setTimeout(()=>{
      main.classList.add("transition");
    }, 100);
    setTimeout(()=>{
      main.classList.remove("hidden", "left");
    }, 101)
    setTimeout(()=>{
      main.classList.remove("transition");
    }, 600);
  };


  const setFirstBubbleMode = () => {
    if(initialBubbleMode && initialBubbleMode === URL.URL_HOME){
      updateBubbleMode("home");
    };
    if(initialBubbleMode &&
      (initialBubbleMode === URL.URL_PLOMBERIE
        || initialBubbleMode === URL.URL_CHAUFFAGE
        || initialBubbleMode === URL.URL_CLIMATISATION
        || initialBubbleMode === URL.URL_RENOVATION
        || initialBubbleMode === URL.URL_AIDES
      )
    ){
      updateBubbleMode("services");
    };
    if(initialBubbleMode && initialBubbleMode === URL.URL_CONTACT){
      updateBubbleMode("contact");
    }
  }

  const AppRef = useRef(null);

  useEffect(() => {
    setFirstBubbleMode();

    const appref = AppRef.current;

    const handleScroll = () => {
      const scrollPosition = appref.scrollTop;
      const header = document.getElementById("header");
      if(scrollPosition > 0 && !header.classList.contains("small")){
        header.classList.add("small");
      }
      if(scrollPosition === 0 && header.classList.contains("small")){
        header.classList.remove("small");
      }
      /*const heightThreshold = 80;
      const burger = document.getElementById("burger");
      const nav = document.getElementById("nav-menu");

      if(scrollPosition > heightThreshold && !burger.classList.contains("visible")){
        burger.classList.add("visible")
      }
      if(scrollPosition > heightThreshold && !nav.classList.contains("hidden-menu")){
        nav.classList.add("hidden-menu");
      }
      if(scrollPosition === 0){
        burger.classList.remove("visible");
        nav.classList.remove("hidden-menu");
      }*/
    }

    if(appref){
      appref.addEventListener('scroll', handleScroll)
    }
    return () => {
      if(appref){
        appref.removeEventListener('scroll', handleScroll);
      }
    }
  });

  

  /**arbitrary values corresponding to the Y axis offset (in % of height of their respective containers) of each set of bubbles */
  const bubbles = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];

  /**option for a more compact visual */
  /*const bubbles = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100];*/

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

  let navOpen = false;
  const toggleNav = () => {
    const header = document.getElementById("header");
    const burger = document.getElementById("burger");
    if(navOpen){
      navOpen = false;
      header.classList.remove("nav-open")
      burger.classList.remove("burger-open")
    }
    else{
      if(!header.classList.contains("nav-open")){
        navOpen = true;
        header.classList.add("nav-open");
      }
      if(!burger.classList.contains("burger-open")){
        burger.classList.add("burger-open")
      }
    }
  }



  return (
    <div className="App" id="App" ref={AppRef}>
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
      <header id="header">
        <div className="light-blue-bar"></div>
          <div className="header-logo-container">
            <img src={logo} className="header-logo" alt="logo de l'entreprise"/>
          </div>
        <div id="burger" onClick={toggleNav}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <p>Menu</p>
        </div>
        <ul className="nav-contact-info">
          <li><span>Ghislaine :</span> 06 33 97 97 49</li>
          <li><span>Olivier :</span> 07 82 17 93 36</li>
          <li><span>Mail :</span> ghislaine.bpsplomberie@gmail.com</li>
        </ul>
        <nav id="nav-menu">
          <ul>
            <li>
              <Link to={URL.URL_HOME} onClick={()=>updateBubbleMode("home")} className="nav-button">Accueil</Link>
            </li>
            <li>
              <Link to={{pathname: URL.URL_PLOMBERIE, state: {updateBubbleMode}}} onClick={()=>updateBubbleMode("services")} className="nav-button">Plomberie</Link>
            </li>
            <li>
              <Link to={{pathname: URL.URL_CHAUFFAGE, state: {updateBubbleMode}}} onClick={()=>updateBubbleMode("services")} className="nav-button">Chauffage</Link>
            </li>
            <li>
              <Link to={{pathname: URL.URL_CLIMATISATION, state: {updateBubbleMode}}} onClick={()=>updateBubbleMode("services")} className="nav-button">Climatisation & VMC</Link>
            </li>
            <li>
              <Link to={{pathname: URL.URL_RENOVATION, state: {updateBubbleMode}}} onClick={()=>updateBubbleMode("services")} className="nav-button">Rénovation</Link>
            </li>
            <li>
              <Link to={{pathname: URL.URL_AIDES, state: {updateBubbleMode}}} onClick={()=>updateBubbleMode("services")} className="nav-button">Aides gouvernemenales</Link>
            </li>
            <li>
              <Link to={URL.URL_CONTACT} onClick={()=>updateBubbleMode("contact")} className="nav-button">Contact</Link>
            </li>
          </ul>
          <div className="sub-header-gradient"></div>
        </nav>
        <div className="yellow-bar"></div>
      </header>
      <main id="main" className="hidden">
        <div className="main-bg-gradient"></div>
        <Routes />
        <div id="contact-button">
          <Link to={URL.URL_CONTACT} onClick={()=>updateBubbleMode("contact")}>
            <div className="contact-background-gradient"></div>
            <div className="ellipse"></div>
            <div className="button">Prendre contact</div>
            <div className="arrow yellow-arrow arrow1"></div>
            <div className="arrow yellow-arrow arrow2"></div>
            <div className="arrow yellow-arrow arrow3"></div>
            <div className="arrow light-blue-arrow arrow1"></div>
            <div className="arrow light-blue-arrow arrow2"></div>
            <div className="arrow light-blue-arrow arrow3"></div>
          </Link>
        </div>
        <div className="contact-button-buffer"></div>
      </main>
      <footer>
        <div className="yellow-bar"></div>
        <div className="footer-content">
          <div className="footer-logo-container">
            <img src={logo} className="footer-logo" alt="logo de l'entreprise"/>
            <img src={rge} className="rge-logo" alt="logo RGE" />
          </div>
          {/**footer buttons have been disabled since the <nav> will always be visible or accessible anywhere on the website */}
          {/* <div className="footer-buttons">
            <Link to={URL_HOME} onClick={()=>updateBubbleMode("home")} className="nav-button">Accueil</Link>
            <Link to={{pathname: URL_SERVICES, state: {updateBubbleMode}}} onClick={()=>updateBubbleMode("services")} className="nav-button">Services</Link>
            <Link to={URL_CONTACT} onClick={()=>updateBubbleMode("contact")} className="nav-button">Contact</Link>
          </div> */}
          <p className="payment-methods">{"Moyens de paiement : virement bancaire, chèque, espèces (< 1 000 €), Paypal"}</p>
          <ul className="legal">
            <h3>Mentions légales :</h3>
            <li><span>Entreprise :</span> BIGORD PLOMBERIE SERVICES SARL</li>
            <li><span>Adresse :</span> EURL Bigord Plomberie Services 5 Rue Baudouin IX, 59 650 Villeneuve d'Ascq</li>
            <li><span>N° SIRET :</span> 819 681 859 00024</li>
            <li><span>N° d'assujettissement à la TVA :</span> FR44819681859</li>
            <li><span>Dirigeant :</span> Olivier BIGORD</li>
            <li>Site conçu par Alexandre Demontier EI : <a href="https://kirjal.fr" target="_blank">https://kirjal.fr</a></li>
            <li>Hébergement par OVH</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

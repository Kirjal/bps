import React from "react";
import image_link from "../assets/images/image_pour_accueil.png";

const PlomberieView = () => {
    return(
        <>
            <img className="photo_exemple" src={image_link}/>
            <div className="title-container services-title">
                <div className="title">
                    <div className="title-fade"></div>
                    <div className="title-outline"></div>
                    <h1>Plomberie</h1>
                </div>
                <div className="title-gradient"></div>
            </div>
            <div className="content">
                <p>
                    <strong><b>BIGORD PLOMBERIE SERVICES</b></strong> propose des <strong><b>services de plomberie complets</b></strong>, allant de l'installation de systèmes d'alimentation en eau, de gaz, à la réparation des fuites et à la mise en place de solutions d’assainissement.
                    <br />
                    <br />
                    Olivier Bigord intervient rapidement pour assurer un <strong>dépannage</strong> efficace, une <strong>rénovation</strong> ou l'<strong>installation de nouveaux équipements sanitaires</strong>, tout en garantissant un <strong>respect des normes de sécurité et de qualité</strong>.
                </p>
            </div>
        </>
    );
};

export default PlomberieView;
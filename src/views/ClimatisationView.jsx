import React from "react";
import image_link from "../assets/images/climatisation.png";

const ClimatisationView = (props) => {
    return(
        <>
            <img className="photo_exemple" alt="" src={image_link}/>
            <div className="title-container services-title">
                <div className="title">
                    <div className="title-fade"></div>
                    <div className="title-outline"></div>
                    <h1>Climatisation & VMC</h1>
                </div>
                <div className="title-gradient"></div>
            </div>
            <div className="content">
                <p>
                    L’entreprise propose également des <strong><b>services de climatisation et de ventilation mécanique contrôlée (VMC)</b></strong> pour améliorer votre confort intérieur.
                    <br />
                    <br />
                    Olivier Bigord <strong>installe, entretient et dépanne vos systèmes de climatisation</strong> pour vous garantir un air frais et pur, quelle que soit la saison. Il s’assure également de la bonne performance de vos VMC, essentielles pour une qualité de l'air optimale et un contrôle efficace de l’humidité dans vos locaux.
                </p>
            </div>
        </>
    );
};

export default ClimatisationView;
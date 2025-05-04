import React from "react";
import image_link from "../assets/images/chauffage.png";

const ChauffageView = (props) => {
    return(
        <>
            <img className="photo_exemple" alt="" src={image_link}/>
            <div className="title-container services-title">
                <div className="title">
                    <div className="title-fade"></div>
                    <div className="title-outline"></div>
                    <h1>Chauffage</h1>
                </div>
                <div className="title-gradient"></div>
            </div>
            <div className="content">
                <p>
                    Pour vos besoins en <strong>chauffage</strong>, <strong><b>BIGORD PLOMBERIE SERVICES</b></strong> est spécialisé dans <strong><b>l’installation, l’entretien et la réparation de chaudières</b></strong>, ainsi que l'installation de <strong><b>systèmes de chauffage central et de planchers chauffants</b></strong>.
                    <br />
                    <br />
                    Olivier Bigord veille à <strong>optimiser l'efficacité énergétique de vos installations</strong> pour garantir une chaleur agréable tout en <strong>respectant l’environnement</strong>. Que ce soit pour une intervention en urgence ou une rénovation, il met son expertise à votre service pour vous offrir des <strong>solutions fiables et performantes</strong>.
                </p>
            </div>
        </>
    );
};

export default ChauffageView;
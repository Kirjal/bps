import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import '../assets/styles/views/contact.css';
import tick from '../assets/images/checkmark.png';

const ContactView = () => {

    const [optionsVisibility, setOptionsVisibility] = useState(false);

    const handleSubmit = (values) => {
        console.log(values);
    }


    return(
        <div className="content form-content">
            <h2>Formulaire de contact</h2>
            <p className="notice">Les champs marqués d'un astérique (*) sont obligatoires.</p>
            <Formik
                initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    town: "",
                    zipcode: "",
                    address: "",
                    emergency: "",
                    business: false,
                    businessName: "",
                    siret: "",
                    info: ""
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Veuillez entrer un nom."),
                    phone: Yup.mixed().required("Veuillez entrer un n° de téléphone."),
                    email: Yup.mixed().required("Veuillez entrer une adresse mail."),
                    town: Yup.mixed().required("Veuillez entrer votre ville."),
                    zipcode: Yup.mixed().required("Veuillez entrer votre code postal."),
                })}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form action="">
                        <label htmlFor="name">Nom complet *</label>
                        <Field type="text" name="name" id="name" placeholder="Nom Prénom"
                            className="form-input"
                        />
                        <span className="error"><ErrorMessage name="name" /></span>

                        <label htmlFor="phone">n° de téléphone *</label>
                        <Field type="text" name="phone" id="phone" placeholder="+33 1 23 45 67 89"
                            className="form-input"
                        />
                        <span className="error"><ErrorMessage name="phone" /></span>

                        <label htmlFor="email">Adresse mail *</label>
                        <Field type="text" name="email" id="email" placeholder="exemple.@exemple.com"
                            className="form-input"
                        />
                        <span className="error"><ErrorMessage name="email" /></span>

                        <label htmlFor="town">Ville *</label>
                        <Field type="text" name="town" id="town" placeholder="Ville"
                            className="form-input"
                        />
                        <span className="error"><ErrorMessage name="town" /></span>

                        <label htmlFor="zipcode">Code postal *</label>
                        <Field type="text" name="zipcode" id="zipcode" placeholder="12 345"
                            className="form-input"
                        />
                        <span className="error"><ErrorMessage name="zipcode" /></span>
                        
                        <label htmlFor="address">Adresse complète <span>(facultatif)</span></label>
                        <Field type="text" name="address" id="address" placeholder="Ex.: 2 rue exemple appartement 8" className="form-input" />

                        <label>Niveau d'urgence</label>
                        <div className="emergency-check">

                            <label htmlFor="urgent" className="small-label">
                                <Field type="radio" name="emergency" id="urgent" value="Besoin immédiat" className="form-checkbox" />
                                <img src={tick} alt="" className="checkmark" />
                                <p>Besoin immédiat</p>
                            </label>

                            <label htmlFor="not-urgent" className="small-label">
                                <Field type="radio" name="emergency" id="not-urgent" value="Peut attendre une disponibilité" className="form-checkbox" />
                                <img src={tick} alt="" className="checkmark" />
                                <p>Peut attendre une disponibilité</p>
                            </label>

                        </div>

                        <div className="business-check-container">

                            <div className="business-check-title">
                                
                                <label>
                                    <Field type="checkbox" name="business" id="business" className="form-checkbox" onChange={()=>{
                                        setFieldValue("business", !values.business);
                                        setOptionsVisibility(!optionsVisibility);
                                    }}/>
                                    <img src={tick} alt="" className="checkmark" />
                                    <span>Êtes-vous une entreprise?</span>
                                </label>
                            </div>


                            <div className={`business-options-container${optionsVisibility? "" : " hidden"}`} id="business-options-container">
                                <div className="business-yellow-bar"></div>
                                <div className="business-options">

                                    <label htmlFor="businessName">Nom de l'entreprise</label>
                                    <Field type="text" name="businessName" id="businessName" placeholder="Nom de l'entreprise" className="form-input" />

                                    <label htmlFor="siret">n° SIRET</label>
                                    <Field type="text" name="siret" id="siret" placeholder="n° SIRET" className="form-input" />

                                </div>
                            </div>
                        </div>

                        <label htmlFor="info">Informations sur vos besoins</label>
                        <Field type="text" name="info" id="info" placeholder="Détaillez ici vos besoins" className="form-input" />

                        <button type="submit">Envoyer</button>
                    </Form>
                )}
                
            </Formik>
        </div>
        
    );
};

export default ContactView;
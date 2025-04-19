import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import tick from '../assets/images/checkmark.png';

const ContactView = () => {

    const [optionsVisibility, setOptionsVisibility] = useState(false);

    const handleSubmit = (values) => {
        console.log(values);
    }


    return(
        <>
            <div className="title-container contact-title">
                <div className="title">
                    <div className="title-fade"></div>
                    <div className="title-outline"></div>
                    <h1>Formulaire de contact</h1>
                </div>
                <div className="title-gradient"></div>
            </div>
            <div className="content form-content">
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
                    validationSchema={
                        Yup.object({
                        name: Yup
                            .string()
                            .required("Veuillez entrer un nom."),
                        phone: Yup
                            .mixed()
                            .required("Veuillez entrer un n° de téléphone."),
                        email: Yup
                            .string()
                            .required("Veuillez entrer une adresse mail."),
                        town: Yup
                            .string()
                            .required("Veuillez entrer votre ville."),
                        zipcode: Yup
                            .string()
                            .required("Veuillez entrer votre code postal."),
                        business: Yup.boolean(),
                        businessName: Yup
                            .string()
                            .when("business", {
                                is: true,
                                then: ()=> Yup.string().required("Requis si vous êtes une entreprise.")
                            })
                    })}
                    onSubmit={handleSubmit}
                >
                    {({ values, setFieldValue, errors, touched, handleSubmit }) => (
                        <Form action="">
                            <div className="input-container business-check-container">

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


                                <div className={`business-options-container ${optionsVisibility? "" : " hidden"}`} id="business-options-container">
                                    <div className={`business-bar ${optionsVisibility? "" : " hidden"}`}></div>
                                    <div className="business-options">

                                        <label htmlFor="businessName">Nom de l'entreprise *</label>
                                        <Field type="text" name="businessName" id="businessName" placeholder="Nom de l'entreprise" className="form-input" />
                                        <span className="error"><ErrorMessage name="businessName" /></span>

                                        <label htmlFor="siret">n° SIRET</label>
                                        <Field type="text" name="siret" id="siret" placeholder="n° SIRET" className="form-input" />

                                    </div>
                                </div>
                            </div>
                            <div className="input-container">
                                <label htmlFor="name">Personne à contacter *</label>
                                <Field type="text" name="name" id="name" placeholder="Nom Prénom"
                                    className={`form-input  ${errors.name && touched.name ? " invalid-input" : ""}`}
                                />
                                <span className="error"><ErrorMessage name="name" /></span>
                            </div>

                            <div className="input-container">
                                <label htmlFor="phone">n° de téléphone *</label>
                                <Field type="text" name="phone" id="phone" placeholder="+33 1 23 45 67 89"
                                    className={`form-input ${errors.phone && touched.phone ? " invalid-input" : ""}`}
                                />
                                <span className="error"><ErrorMessage name="phone" /></span>
                            </div>
                            
                            <div className="input-container">
                                <label htmlFor="email">Adresse mail *</label>
                                <Field type="text" name="email" id="email" placeholder="exemple.@exemple.com"
                                    className={`form-input ${errors.email && touched.email ? " invalid-input" : ""}`}
                                />
                                <span className="error"><ErrorMessage name="email" /></span>
                            </div>
                            
                            <div className="input-container">
                                <label htmlFor="town">Ville *</label>
                                <Field type="text" name="town" id="town" placeholder="Ville"
                                    className={`form-input ${errors.town && touched.town ? " invalid-input" : ""}`}
                                />
                                <span className="error"><ErrorMessage name="town" /></span>
                            </div>
                            
                            <div className="input-container">
                                <label htmlFor="zipcode">Code postal *</label>
                                <Field type="text" name="zipcode" id="zipcode" placeholder="12 345"
                                    className={`form-input ${errors.zipcode && touched.zipcode ? " invalid-input" : ""}`}
                                />
                                <span className="error"><ErrorMessage name="zipcode" /></span>
                            </div>
                            
                            <div className="input-container">
                                <label htmlFor="address">Adresse complète <span>(facultatif)</span></label>
                                <Field as="textarea" name="address" id="address" placeholder="2 rue exemple appartement 8" className="form-input" />
                            </div>
                            
                            <div className="input-container">
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
                            </div>
                            


                            <div className="input-container textarea">
                                <label htmlFor="info">Informations sur vos besoins</label>
                                <Field as="textarea" name="info" id="info" placeholder="Détaillez ici vos besoins" className="form-input" />
                            </div>
                            

                            <div className="button-container" onClick={handleSubmit}>

                                <button type="submit">Envoyer</button>

                                <svg className="contact-blue-arrow" width="48" height="68" viewBox="0 0 48 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.4732 29.5761C44.9847 31.9444 44.9847 35.9383 42.4733 38.3066L26.0481 53.7956C22.2205 57.405 15.9317 54.6914 15.9317 49.4304L15.9317 18.4523C15.9317 13.1913 22.2205 10.4777 26.0481 14.0871L42.4732 29.5761Z" fill="#B3D3F8"/>
                                    <path d="M0 31.3218C0 28.5604 2.23858 26.3218 5 26.3218H16.6243V41.5608H5C2.23858 41.5608 0 39.3222 0 36.5608L0 31.3218Z" fill="#B3D3F8"/>
                                    <path d="M39.8482 31.7318C41.1424 32.9205 41.1424 34.962 39.8482 36.1506L24.4246 50.3174C22.5011 52.0842 19.3952 50.7197 19.3952 48.108L19.3952 19.7744C19.3952 17.1627 22.5011 15.7982 24.4246 17.565L39.8482 31.7318Z" fill="#F5F5F5"/>
                                    <path d="M3.46338 31.7853C3.46338 30.6807 4.35881 29.7853 5.46338 29.7853H19.395V38.0974H5.46338C4.35881 38.0974 3.46338 37.202 3.46338 36.0974V31.7853Z" fill="#F5F5F5"/>
                                </svg>

                                <svg className="contact-yellow-arrow" width="48" height="68" viewBox="0 0 48 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.4732 29.5761C44.9847 31.9444 44.9847 35.9383 42.4733 38.3066L26.0481 53.7956C22.2205 57.405 15.9317 54.6914 15.9317 49.4304L15.9317 18.4523C15.9317 13.1913 22.2205 10.4777 26.0481 14.0871L42.4732 29.5761Z" fill="#FFAD05"/>
                                    <path d="M0 31.3218C0 28.5604 2.23858 26.3218 5 26.3218H16.6243V41.5608H5C2.23858 41.5608 0 39.3222 0 36.5608L0 31.3218Z" fill="#FFAD05"/>
                                    <path d="M39.8482 31.7318C41.1424 32.9205 41.1424 34.962 39.8482 36.1506L24.4246 50.3174C22.5011 52.0842 19.3952 50.7197 19.3952 48.108L19.3952 19.7744C19.3952 17.1627 22.5011 15.7982 24.4246 17.565L39.8482 31.7318Z" fill="#F5F5F5"/>
                                    <path d="M3.46338 31.7853C3.46338 30.6807 4.35881 29.7853 5.46338 29.7853H19.395V38.0974H5.46338C4.35881 38.0974 3.46338 37.202 3.46338 36.0974V31.7853Z" fill="#F5F5F5"/>
                                </svg>

                            </div>
                        </Form>
                    )}
                    
                </Formik>
                <p className="notice"><small>Formulaire assisté par Web3Forms. Les informations envoyées ne seront consultées que par Bigord Plomberie Services.</small></p>
                <p className="notice"><b>N'hésitez pas à contacter votre assurance pour une éventuelle prise en charge !</b></p>
            </div>
        </>
        
        
    );
};

export default ContactView;
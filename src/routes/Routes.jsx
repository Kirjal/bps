import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";
import HomeView from "../views/HomeView";
import PlomberieView from "../views/PlomberieView";
import ChauffageView from "../views/ChauffageView";
import ClimatisationView from "../views/ClimatisationView";
import RenovationView from "../views/RenovationView";
import AidesView from "../views/AidesView";
import ContactView from "../views/ContactView";
import * as URL from "../constants/url";

const Routes = () => {
    return(
        <RoutesContainer>
            <Route path={URL.URL_HOME} element={<HomeView />} />
            <Route path={URL.URL_PLOMBERIE} element={<PlomberieView />} />
            <Route path={URL.URL_CHAUFFAGE} element={<ChauffageView />} />
            <Route path={URL.URL_CLIMATISATION} element={<ClimatisationView />} />
            <Route path={URL.URL_RENOVATION} element={<RenovationView />} />
            <Route path={URL.URL_AIDES} element={<AidesView />} />
            <Route path={URL.URL_CONTACT} element={<ContactView />} />
        </RoutesContainer>
    );
};

export default Routes;
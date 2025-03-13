import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "../views/HomeView";
import ServicesView from "../views/ServicesView";
import ContactView from "../views/ContactView";
import * as URL from "../constants/url";

const Routes = () => {
    return(
        <Routes>
            <Route path={URL.URL_HOME} element={<HomeView />} />
            <Route path={URL.URL_SERVICES} element={<ServicesView />} />
            <Route path={URL.URL_CONTACT} element={<ContactView />} />
        </Routes>
    );
};

export default Routes;
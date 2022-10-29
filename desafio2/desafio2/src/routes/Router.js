import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import homePage from "../pages/HomePage/homePage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<homePage/>} />
            </Routes>
        </BrowserRouter>
    )
}
    
export default Router;
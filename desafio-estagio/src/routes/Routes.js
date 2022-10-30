import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/homePage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
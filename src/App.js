import React from "react";
import {  Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginPage from "./Pages/LoginPage";
import Navbar from './Components/Navbar'
import CountryListPage from "./Pages/CountryListPage";
import CountryDetailPage from "./Pages/CountryDetailPage";
import CheckLoginHOC from './Components/CheckLoginHOC'

function App() {
  const loggedIn = useSelector((state) => state.loggedIn)
  return (
    <>
      {loggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<CountryListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details/:alphaCode" element={<CountryDetailPage />} />
      </Routes>
    </>
  );
}

export default CheckLoginHOC(App);

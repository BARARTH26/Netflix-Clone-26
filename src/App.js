import React from "react";
import './App.css';
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row Title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row Title="Tending Now"  fetchUrl={requests.fetchTrending}/>
      <Row Title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
      <Row Title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
      <Row Title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
      <Row Title="Romance Movies"  fetchUrl={requests.fetchRomanticMovies}/>
      <Row Title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
      <Row Title="Documentries"  fetchUrl={requests.fetchDocumentries}/>
      
    </div>
  );
}

export default App;

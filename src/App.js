import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import Jumbotron from "./Components/Jumbotron"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import {useState, useEffect} from 'react';
import { client } from './client';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    client.getEntries()
    .then(res => {
      console.log(res.items[0].fields);
    })
  },[])

  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <div style={{minHeight: "600px"}}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

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

  console.log("Data",data)

  useEffect(() => {
    client.getEntries()
    .then(res => {
      console.log("ITEMS", res.items[0].fields)
      
      setData(() => ({
        ...res.items[0].fields
      }))
    })
  }, [])

  return (
    <div className="App">
      <h1>SOUP</h1>
      <NavBar />
      <Jumbotron />
      <Main data={data}/>
      <Footer />
    </div>
  );
}

export default App;

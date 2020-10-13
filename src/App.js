import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import Jumbotron from "./Components/Jumbotron"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import NotFound from "./Components/NotFound"
import {useState, useEffect} from 'react';
import { client } from './client';

function App() {

  const [data, setData] = useState({
    infos: []
  });

  console.log("Data",data)

  useEffect(() => {
    client.getEntries()
    .then(res => {
      console.log("ITEMS", res.items)
      setData(() => ({
        infos: [...res.items]
      }))
    }).catch(error => console.log(error.message))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <div style={{minHeight: "600px"}}>
        <Main infos={data.infos}/>
      </div>
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;

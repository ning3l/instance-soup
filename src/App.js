import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import Jumbotron from "./Components/Jumbotron"
import Main from "./Components/Main"
import Detail from "./Components/Detail"
import Footer from "./Components/Footer"
import NotFound from "./Components/NotFound"
import {useState, useEffect} from 'react';
import { client } from './client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Switch, Route } from "react-router-dom";

function App() {

  const [data, setData] = useState({
    infos: [],
    levelSelected: ""
  });

  console.log("Level from app", data.levelSelected)

  const formatted = data.infos.map((el) => {
    return {
      id: el.fields.id,
      author: el.fields.author,
      title: el.fields.title,
      abstract: el.fields.abstract,
      date: el.fields.creationDate,
      level: el.fields.level,
      image: el.fields.image.fields.file.url,
      video: el.fields.video,
      info: el.fields.info
    };
  });

  const levels = formatted.map(el => el.level)

  const topics = data.infos
    .map(el => [...el.fields.topics])
    .reduce((acc, val) => acc.concat(val), [])
    .filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))

  useEffect(() => {
    client.getEntries()
    .then(res => {
      setData((prevState) => ({
        ...prevState,
        infos: [...res.items]
      }))
    }).catch(error => console.log(error.message))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <div style={{minHeight: "600px"}}>

      <Switch>
        <Route path="/projects/:id?" render={(props) => <Main formatted={formatted} level={data.levelSelected} topics={topics} setData={setData} {...props}/>} />
      </Switch>

      </div>
      <Footer />
    </div>
  );
}

export default App;

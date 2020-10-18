import React from "react";
import Detail from "./Detail.js";
import Jumbotron from "./Jumbotron";
import { Link } from "react-router-dom"; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Main({ formatted, level, topics, match, setData }) {

  const randomColor = () => {
    const colors = ["#FFC634", "#FF5020", "#2B8CC1", "#E67192", "#00B349", "#00C654", "#A3585A"]
    return colors[Math.floor(Math.random()*colors.length)]
  }

  const getRich = formatted
  .filter(el => el.id === Number(match.params.id))
  .map(el => documentToReactComponents(el.info))[0]

  const vid = formatted
    .filter(el => el.id === Number(match.params.id)) // filter slugs instead
    .map(el => el.video)[0]

    const handleChange = (e) => {
      e.persist()
      if (e.target.value !== "Select spiceyness of your project") {
        setData(prevState => ({
          ...prevState,
          levelSelected: e.target.value
        }))
      }
    }

  return (
    <>
   {!match.params.id && <Jumbotron/>}
   {/* CONDITIONAL RENDERING for main / detail page */}
    {match.params.id ? <Detail vid={vid} getRich={getRich}/> :  <div className="container">
      <select className="custom-select custom-select-lg mb-3" onChange={(e) => handleChange(e)}>
        <option selected>Select spiceyness of your project</option>
        <option value="easy">🌶 (easy)</option>
        <option value="medium">🌶 🌶 (medium)</option>
        <option value="hard">🌶 🌶 🌶 (hard)</option>
      </select>

      <div className="row">
        <div className="col-sm-12">
  {topics.map(el => <button className="btn" style={{backgroundColor: randomColor()}}>{el}</button>)}
        </div>
      </div>

  {/* nested conditional rendering spicyness: */}
  {level? <div class="row mb-3 mt-3">{formatted.filter(el => el.level === level).map(el => {
    return (
      <div class="col-sm-3 mb-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={el.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.abstract}</p>
                  <Link to={`/projects/${el.id}`} className="btn btn-warning">
                    see project
                  </Link>

                </div>
              </div>
            </div>
    )
  })}</div> : 

      <div className="row mb-3 mt-3">
        {formatted.map((el) => {
          return (
            <div className="col-sm-3 mb-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={el.image}
                  alt="Card top"
                />
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.abstract}</p>
                  <Link to={`/projects/${el.id}`} className="btn btn-warning">
                    see project
                  </Link>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    }

    </div>}
    </>
  );
  


    
}
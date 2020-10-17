import React from "react";
import Detail from "./Detail.js";
import { Link } from "react-router-dom"; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Main({ formatted, level, topics, match, setData }) {

  const randomColor = () => {
    const colors = ["#F2EC7E", "#EB1D24", "#2F9AD3", "#E67192", "#F0901E", "#4BB13F", "#BC1F2E"]
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

    const onlySpicy = formatted.filter(el => el.level === "easy");
    console.log("Spicyyyyy", onlySpicy)
  

  return (
    <>
   {/* CONDITIONAL RENDERING for main / detail page */}
   {match.params.id ? <Detail vid={vid} getRich={getRich}/> :  <div className="container">
      <select className="custom-select custom-select-lg mb-3" onChange={(e) => handleChange(e)}>
        <option selected>Select spiceyness of your project</option>
        <option value="easy">🌶</option>
        <option value="medium">🌶 🌶</option>
        <option value="hard">🌶 🌶 🌶</option>
      </select>

      <div className="row">
        <div className="col-sm-6">
  {topics.map(el => <button className="btn" style={{backgroundColor: randomColor()}}>{el}</button>)}
        </div>
      </div>

  {/* nested conditional rendering spicyness: */}
  {level? <div class="row">{formatted.filter(el => el.level === "easy").map(el => {
    return (
      <div class="col-sm-3">
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

      <div class="row">
        {formatted.map((el) => {
          return (
            <div class="col-sm-3">
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
          );
        })}
      </div>
    }

    </div>}
    </>
  );
  


    
}



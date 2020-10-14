import React from "react";

export default function Main({ formatted, topics }) {

  const randomColor = () => {
    const colors = ["#F2EC7E", "#EB1D24", "#2F9AD3", "#E67192", "#F0901E", "#4BB13F", "#BC1F2E"]
    return colors[Math.floor(Math.random()*colors.length)]
  }

  return (
    <div className="container">
      <select className="custom-select custom-select-lg mb-3">
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
                  <a href="#" className="btn btn-warning" id={el.id} onClick={(e) => console.log(e.target.id)}>
                    see project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



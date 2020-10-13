import React from "react";

export default function Main({ infos }) {
  const formatted = infos.map((el) => {
    return {
      id: el.fields.id,
      author: el.fields.author,
      title: el.fields.title,
      abstract: el.fields.abstract,
      date: el.fields.creationDat,
      description: el.fields.description,
      level: el.fields.level,
      image: el.fields.image.fields.file.url,
    };
  });

  return (
    <div className="container">
      <select className="custom-select custom-select-lg mb-3">
        <option selected>Select spiceyness of your project</option>
        <option value="easy">🌶</option>
        <option value="medium">🌶 🌶</option>
        <option value="hard">🌶 🌶 🌶</option>
      </select>

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
                  <a href="#" className="btn btn-primary">
                    Go somewhere
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



import React from "react";

export default function Main() {
  const fake = [1, 2, 3];
  return (
    <div className="row" style={{minHeight: "75%"}}>
      {fake.map((element) => {
        return (
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

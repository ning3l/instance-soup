import React from 'react'
import notFoundImage from './404.jpeg';

export default function NotFound() {
    return (

     <div className="notFoundContainer" style={{minHeight: 800, backgroundImage: `url(${notFoundImage})`, backgroundRepeat: "repeat", backgroundPosition: "0 0", backgroundSize: "cover"}}>
            
            <div className="hi">
              <div className="notFound">
                <p className="notFoundText">The state of these noodles is <em>undefined</em>...</p>
              </div>

              <div>
                <button type="button" className="btn btn-light">Spice up my noodles</button>
              </div>
            </div>
      </div>

    )
}

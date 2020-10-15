import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



export default function Detail({ getRich, getVid }) {

    console.log(getRich)

    let vid = getVid()
    console.log("video from detail", vid)

    return (
        <div className="container">
            {/* {rich} */}

            <iframe width="560" height="315" src={vid} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}



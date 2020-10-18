import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



export default function Detail({ getRich, vid }) {

    return (
        <div className="container mt-3 mb-3">
            {getRich}
            <iframe width="560" height="315" src={vid} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}



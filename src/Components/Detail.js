import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Detail({ richText, video }) {

    return (
        <div className="container">
            {richText}

            <iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}



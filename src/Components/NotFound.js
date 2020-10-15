import React from 'react'
import notFoundImage from './404.jpeg';

export default function NotFound() {
    return (
        <div>
            <img src={notFoundImage} alt="This is a raw noodles representing a unfinished state and therefore indicating that you did not found what you searched for."/>
        </div>
    )
}

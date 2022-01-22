import React from 'react';

function Card({url,href}) {
    return (
        <div >
            <div >
                <a href={href}><img src={url} alt='image' ></img></a>
                {/* <h1>{header}</h1>
                <h2>{dis}</h2> */}
            </div>
        </div>
        
    );
}

export default Card;
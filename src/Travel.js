import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
        <img src={photo} alt={destination} />
        <figcaption>
            <blockquote>{country}</blockquote>
            <cite>{distance}</cite>
        </figcaption>
    </figure>
);

export default Travel;

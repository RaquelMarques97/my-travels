import React from "react";

const Travel = ({ trip }) => (
    <figure>
        {console.log('photo:', trip.photo)}
        <img src={trip.photo} alt={trip.destination} />
        <figcaption>
            <blockquote>{trip.country}</blockquote>
            <cite>{trip.distance}</cite>
        </figcaption>
    </figure>

);
export default Travel;

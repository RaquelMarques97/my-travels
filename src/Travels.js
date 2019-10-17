import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination: " Madrid",
        country: "Spain",
        photo: "http://joaobarrigudo.pt/wp-content/uploads/2019/02/o-que-fazer-em-madrid.jpg",
        distance: "a lot"
    },
    {
        destination: " Munich",
        country: "Germany",
        photo: "http://www.destinomunique.com.br/wp-content/uploads/2015/10/Visite-Munique-Centro.jpg",
        distance: "a lot"
    },
    {
        destination: " London",
        country: "England",
        photo: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
        distance: "a lot"
    }, {
        destination: " Coina",
        country: "Portugal",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Palacete_%2814544566%29.jpg",
        distance: "a lot",
    }, {
        destination: " Lapa do lobo",
        country: "Portugal",
        photo: "https://catarinamiranda.pt/wp-content/uploads/2018/02/315283041.jpg",
        distance: "a lot"
    },
]

const Travels = () => (
    <div>
        {travels.map(viagem => (
            <Travel trip={viagem} key={viagem.photo} />
        ))}



    </div>
);
export default Travels;
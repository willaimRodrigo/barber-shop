import militar from "../../assets/download.webp";
import samurai from "../../assets/samurai.jpg";
import pompour from "../../assets/pompadour.jpg";
import moicano from "../../assets/moicano.jpg";
import razor from "../../assets/razor.jpg";
import kim from "../../assets/kim.jpg";
import van from "../../assets/van.jpg";
import media from "../../assets/media.jpg";
import baixa from "../../assets/baixa.jpg";
import lenhador from "../../assets/lenhador.webp";

export const TabelaCortes = {
        cabelo: [
            {  
                img: militar,
                id: 1,
                tipo: "Militar"
                , valor: 40 
            },
            { 
                img: samurai,
                id: 2,
                 tipo: "Samurai",
                  valor: 50 
                },
            {
                img: pompour,
                id: 3,
                  tipo: "Pompour",
                   valor: 45 
                },
            { 
                img: moicano,
                id: 4,
                 tipo: "Moicano",
                  valor: 35 
                },

            { 
                img: razor,
                id: 5,
                 tipo: "Razor part",
                  valor: 25
                 },
        ],

        barbas: [
            { 
                img: kim,
                id: 6,
                 tipo: "Kim Bellamy",
                  valor: 50 
                },
            {
                img: van,
                id: 7,
                  tipo: "Van Dyke",
                   valor: 40 
                },
            { 
                img: media,
                id: 8,
                 tipo: "Barba Média",
                  valor: 50 
                },
            {
                img: baixa,
                id: 9,
                  tipo: "Barba Baixa",
                   valor: 40 
                },
            {
                img: lenhador,
                id: 10,
                  tipo: "Lenhador",
                   valor: 35 
                },
        ],
    };
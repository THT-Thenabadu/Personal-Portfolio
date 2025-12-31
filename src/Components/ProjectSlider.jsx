import React, { useState } from "react";
import "./ProjectSlider.css";

const projects = [
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.ngGPgpdbtgabnmInL3k-0QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", // replace with your link
        title: "Portfolio Website",
        description: "A personal website built with React to showcase my work."
    },
    {
        image: "https://th.bing.com/th/id/R.24c4e7b4c79e6011aff61e9b3ec59d37?rik=K8L5ZVQKZ5wdmg&pid=ImgRaw&r=0",
        title: "Todo App",
        description: "A simple task manager built with HTML, CSS & JavaScript."
    },
    {
        image: "https://tse2.mm.bing.net/th/id/OIP.Vi1mm5sxQ3FoAZttNSimhwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Weather App",
        description: "Shows live weather using an API. Built with React."
    }
];

export default function ProjectSlider() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className="slider">
            <div className="slide">
                <img src={projects[index].image} alt={projects[index].title} />
                <h2>{projects[index].title}</h2>
                <p>{projects[index].description}</p>
            </div>

            <div className="buttons">
                <button onClick={prevSlide}>⟵ Prev</button>
                <button onClick={nextSlide}>Next ⟶</button>
            </div>
        </div>
    );
}

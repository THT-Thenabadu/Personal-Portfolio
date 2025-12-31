import React, {useRef} from "react"; //This imports React and the useRef hook -> useRef lets you access a real DOM element
import './Particles.css';               //import the css file
import {useEffect, useState} from "react"; // imports the useEffect and useState

export default function Particles() {
    const containerRef = useRef(null); //Create a reference object initially is set to null later will point to the particles div

    useEffect(() => { //Runs after the component renders
        const container = containerRef.current;//Gets the node for the container and then can append children to it like more div tags
        const colors = ["#FF0000", "#FF2D2D", "#FF8585", "#CC0000", "#661111"];//This is Array of possible colors for particles Each particle will randomly pick a color

        const particleCount = 120; //Controls how many particles

        for (let i = 0; i < particleCount; i++) { // Runs 60 times creates 60 particles or depending on the particle count
            const p = document.createElement("div"); // Create a new div
            p.className = "particle"; //Applies .particle CSS class


            const size = Math.random() * 4 + 2; //Random number between 2 and 6 determine particle size in pixels
            p.style.width = `${size}px`; //Determine particle width and height
            p.style.height = `${size}px`;

            p.style.left = `${Math.random() * 100}vw`; //Sets a random Start position
            p.style.top = `${Math.random() * 100}vh`;

            p.style.backgroundColor = //Sets a random color by picking a random color from array and makes each particle unique
                colors[Math.floor(Math.random() * colors.length)];

            p.style.setProperty( //Using random sets CSS variable --x to be value between -200px tp  +200px Control horizontal distance
                "--x",
                `${Math.random() * 400 - 200}px`
            );
            p.style.setProperty( //Same concept as before just this time it is the vertical distance
                "--y",
                    `${Math.random() * 400 - 200}px`
            );

            p.style.animationDuration = `${20 + Math.random() * 20}s`; //Makes the animation last 20 to 40 seconds
            p.style.animationDirection = "alternate"; // Prevents particles moving in sync
            // alternate prevents snapping back to start it moves back and forth
            container.appendChild(p);// Insert the particles into the page
        }   //They become visible and animated
        // cleanup when component unmounts
        return () => {
            container.innerHTML = "";
        };
    }, []);


    return <div className = "particles" ref={containerRef}></div>;
}
import React from 'react';
import './Title.css'



export default function Title({ title, className }) {
    return(
        <>
            <div className={className}>
                <h1 className="Title">{title}</h1>
            </div>
        </>
    )

}
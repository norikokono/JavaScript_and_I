// https://hackernoon.com/cats-taking-over-how-to-make-a-random-cat-image-generator-with-react-and-cat-api-ke3s3wrg

import React from 'react';
import './Cat.css';
import Cat from './Cat';
import Header from './Header';

function CatImageGenerator() {
    return (
        <div className="CatImageGenerator">
            <Header />
            <Cat />
            <footer>
            <a href="https://hackernoon.com/cats-taking-over-how-to-make-a-random-cat-image-generator-with-react-and-cat-api-ke3s3wrg" target="_blank" rel="noopener noreferrer" style={{color: "LightBlue"}}>Link</a>
            </footer>
        </div>
    );
}

export default CatImageGenerator;
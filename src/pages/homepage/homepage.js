import React from 'react';
import NavBar from '../../components/navBar/navBar';
import Note1 from '../../asets/note2.png';
import Note2 from '../../asets/note2.png';
import Note3 from '../../asets/note2.png';
import './homepage.css';

const Homepage = (props) => {

    return(
        <div>
            <NavBar active={'home'} />
            <div className="homepageComponent">
                <div className="appDescritpion">
                    <h1>Overview</h1>
                    <p>
                        Capture ideas with your voice, add images to notes, check tasks off your to-do list, and much more.
                    </p>
                    <div className="noteImgContainer">
                        <span className="imgOne noteImgs">
                            <img id="imgOne" src={ Note1 } alt="sticker" />
                        </span>
                        <span className="imgTwo noteImgs">
                            <img id="imgTwo" src={ Note2 } alt="sticker" />
                        </span>
                        <span className="imgThree noteImgs">
                            <img id="imgThree" src={ Note3 } alt="sticker" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
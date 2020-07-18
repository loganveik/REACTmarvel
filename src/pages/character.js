import React from 'react';
import Nav from '../components/nav/nav';
import CharComic from '../components/charcomicsearchbar/charcomicsearchbar';
import './pages.css'

function charPage() {
    return (
        <div>
            <Nav 
            profilebtn={<button type="button" className="btn" id="profilegobtn">⬅ Profile</button>}
            />
            
            <CharComic 
            SEARCHcharORcomic={"Search for ANY Marvel Character!"}
            placeholder={"Ex. Hulk, Wolverine, Thor"}
            />
        </div>
    );
}

export default charPage;
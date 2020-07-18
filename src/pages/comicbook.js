import React from 'react';
import Nav from '../components/nav/nav';
import CharComic from '../components/charcomicsearchbar/charcomicsearchbar';
import './pages.css'

function comicPage() {
    return (
        <div>
            <Nav 
            profilebtn={<button type="button" className="btn" id="profilegobtn">⬅ Profile</button>}
            />
            
            <CharComic 
            SEARCHcharORcomic={"Search for ANY Marvel Comicbook!"}
            placeholder={"Ex. Starlord, Iceman, Avengers Assemble"}
            />
        </div>
    );
}

export default comicPage;
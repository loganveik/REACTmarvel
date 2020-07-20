import React, {Component} from 'react';
import Nav from '../components/nav/nav';
import CharComic from '../components/charcomicsearchbar/charcomicsearchbar';
import './pages.css'

class comicPage extends Component {
    backToProfile = () => window.location.pathname = '/';
    render() {
        return (
            <div>
                <Nav
                    profilebtn={<button type="button" className="btn" id="profilegobtn">⬅ Profile</button>}
                    backToProfile={this.backToProfile}
                />

                <CharComic
                    SEARCHcharORcomic={"Search for ANY Marvel Comicbook!"}
                    placeholder={"Ex. Starlord, Iceman, Avengers Assemble"}
                />
            </div>
        );
    }

}

export default comicPage;
import React, {Component} from 'react';
import Nav from '../components/nav/nav';
import CharComic from '../components/charcomicsearchbar/charcomicsearchbar';
import './pages.css'
import API from '../utils/charAPI'

class charPage extends Component {
    state = {
        searchedChar: "",
        result: {}
    };

    searchCharacter = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }, console.log(res.data.data.results[0])))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchCharacter(this.state.searchedChar);
    };

    backToProfile = () => window.location.pathname = '/';

    render() {
        return (
            <div>
                <Nav
                    profilebtn={<button type="button" className="btn" id="profilegobtn">⬅ Profile</button>}
                    backToProfile={this.backToProfile}
                />

                <CharComic
                    SEARCHcharORcomic={"Search for ANY Marvel Character!"}
                    placeholder={"Ex. Hulk, Wolverine, Thor"}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default charPage;
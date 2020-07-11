import React from 'react';
import Nav from '../components/nav/nav';
import './pages.css'

function viewPage() {
    return (
        <div>
            <Nav />
            <h1 style={{ color: "red" }}>view </h1>
        </div>
    );
}

export default viewPage;
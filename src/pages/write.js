import React from 'react';
import Nav from '../components/nav/nav';
import './pages.css'

function writePage() {
    return (
        <div>
            <Nav />
            <h1 style={{ color: "red" }}>write</h1>
        </div>
    );
}

export default writePage;
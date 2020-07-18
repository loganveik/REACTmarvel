import React from 'react';
import Nav from '../components/nav/nav';
import './pages.css'

function writePage() {
    return (
        <div>
            <Nav 
            profilebtn={<button type="button" className="btn" id="profilegobtn">⬅ Profile</button>}
            />
            
            <div class="container h-auto rounded" style={{background: "white", borderStyle: "solid", borderColor: "black", borderWidth: "5px", marginTop: "60px"}}>

                <div class="formdisplay my-3 mx-3">
                    <h2 class="text-center" style={{ fontFamily: "Bangers, cursive" }}>Write a review about your favorite marvel
                character</h2>
                    <form>
                        <div class="form-group">
                            <label for="firstnameinput">Character Name:</label>
                            <input type="text" class="form-control" id="characterinput" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Review:</label>
                            <textarea class="form-control" id="reviewinput" rows="3"></textarea>
                        </div>
                        <div id="warningdiv" class="text-center"></div>
                        <div class="text-center">
                            <button type="button" class="btn my-2 mx-2" id="submitbtn">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="submittext"></div>
            </div>
        </div>
    );
}

export default writePage;
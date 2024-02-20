import React from "react";

function Keypad (){
    function handleInput() {
        console.log("Entering password...")
    }
    return (
        <div>
            <input
            type="password"
            onChange = {handleInput}
            />
        </div>
    )
}

export default Keypad;
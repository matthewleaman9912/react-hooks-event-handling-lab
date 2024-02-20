import React from "react";

function EyesOnMe() {
    function Blur() {
        console.log("Hey! Eyes on me!")
    }
    function Focus() {
        console.log("Good!")
    }
    return (
        <div>
            <button onFocus={Focus} onBlur={Blur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;
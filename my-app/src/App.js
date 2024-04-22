import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import React from "react";

export default function App (){
    const [lightMode, setLightMode] = React.useState(true)

        function toggle(){
            setLightMode(prevMode => !prevMode)
        }

    return(
        <div>
            <Nav 
            lightmode={lightMode}
            toggle={toggle}
            />
            <Main 
            lightmode={lightMode} 
            />
        </div>
    )
}
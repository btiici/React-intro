import reactLogo from "../images/reactjs-icon.png"

export default function Nav(){
    return(
        <nav className="container">
            <div>
                <img src={reactLogo} alt="React Logo"/>
                <h1>ReactFacts</h1>
            </div>
                <p>React Course - Project 1</p>
            
        </nav>
    )
}
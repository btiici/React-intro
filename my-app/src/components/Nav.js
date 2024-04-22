import reactLogo from "../images/reactjs-icon.png"

export default function Nav(props){

    return(
        <nav className={props.lightmode ? "light" : "dark"}>
                <img src={reactLogo} alt="React Logo"/>
                <h1>ReactFacts</h1>
                <div className="container">
                    Light
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="button" onClick={props.toggle}></label>
                    Dark
                </div>  
        </nav>
    )
}
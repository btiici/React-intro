import reactLogo2 from "../images/reactjs-icon 2.png"

export default function Main (props){
    return(
        <main className={props.lightmode ? "light" : "dark"}>
            <h2>Fun facts about React</h2>
            <div>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={reactLogo2}/>
            </div>
        </main>
    )
}
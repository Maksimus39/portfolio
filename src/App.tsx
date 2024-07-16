import './App.css';
import {Header} from "./layaout/header/Header";
import {Main} from "./layaout/sections/main/Main";
import {Skills} from "./layaout/sections/skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;


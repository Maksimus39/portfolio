import './App.css';
import {Header} from "./layaout/header/Header";
import {Main} from "./layaout/sections/main/Main";
import {Skills} from "./layaout/sections/skills/Skills";
import {Works} from "./layaout/sections/works/Works";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;


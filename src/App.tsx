import './App.css';
import {Header} from "./layaout/header/Header";
import {Main} from "./layaout/sections/main/Main";
import {Skills} from "./layaout/sections/skills/Skills";
import {Works} from "./layaout/sections/works/Works";
import {Testimony} from "./layaout/sections/testimony/Testymony";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </div>
    );
}

export default App;


import React, {useState} from 'react';
import { Link } from "@reach/router";
import './css/home.css';
import Popup from "./components/Global/Popup.jsx";
import Chatt from "./components/Global/Chatt.jsx";

const Home = () => {

    const [newGame, setNewGame] = useState(false);

    function popupNewGame () {
        setNewGame(true);
    }

    return (
        <div className="container">
            <h1>Home page</h1>
            <div className="new-game">
                {/* <Popup page="home" /> */}
                <button onClick={popupNewGame} > New Game</button>
            </div>
            <nav>
                <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
            </nav>
            <br />
            <div className="box"></div>
            <br />
            <br />
            <Chatt />
            {newGame ?
            <Popup page="temp" setNewGame={setNewGame} />
            : null}
        </div>
    );
}
export default Home
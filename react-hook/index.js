import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const App = () => {
    const [item, setItem] = useState(0);
    const IncrementItem = () => setItem(item + 1);
    const DecrementItem = () => setItem(item - 1);
    return (
        <div className="App">
            <h1>Hello {item}</h1>
            <button onClick={IncrementItem}>Increment</button>
            <button onClick={DecrementItem}>Decrement</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
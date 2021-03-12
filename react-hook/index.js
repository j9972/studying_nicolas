import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const App = () => {
    // const [item, setItem] = useState(0);
    // const IncrementItem = () => setItem(item + 1);
    // const DecrementItem = () => setItem(item - 1);
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello, [number]);
    return (
        <div className="App">
            {/* 위 코드는 <h1>Hello</h1> {item} 이 원래 코드 */}
            {/* <button onClick={IncrementItem}>Increment</button>
            <button onClick={DecrementItem}>Decrement</button> */}
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}></button>
            <button onClick={() => setAnumber(aNumber + 1)}></button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
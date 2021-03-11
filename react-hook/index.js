import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const content = [
    {
        tab: "Section 1",
        content: "Im the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "Im the content of the Section 2"
    }
]

const App = () => {
    // const [item, setItem] = useState(0);
    // const IncrementItem = () => setItem(item + 1);
    // const DecrementItem = () => setItem(item - 1);
    return (
        <div className="App">
            {/* 위 코드는 <h1>Hello</h1> {item} 이 원래 코드 */}
            {/* <button onClick={IncrementItem}>Increment</button>
            <button onClick={DecrementItem}>Decrement</button> */}
            {content.map(section => (<button>{section.tab}</button>))}
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
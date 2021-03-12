import React, { useState, useEffect, useRef } from "react";
import ReactDOM from  "react-dom";

const useBeforeLeave = (onBefore) => {
    if(typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        const {clientY} = event;
        if(clientY <= 0) {
            onBefore();
        }
        onBefore();
    };
    useEffect(() => {
        document.addEventListener("mouseLeave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }), [];
}

const App = () => {
    const begForLife = () => console.log("plz dont go");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <div>Hi</div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
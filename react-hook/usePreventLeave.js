import React, { useState, useEffect, useRef } from "react";
import ReactDOM from  "react-dom";

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        // returnValue는 무조건 필요, 이게 없으면 새로고침하면 없어진다
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload" ,listener);
    const DisablePrevent = () => window.removeEventListener("beforeunload", listener);
    return { enablePrevent, DisablePrevent };
}

const App = () => {
    const {enablePrevent, DisablePrevent} = usePreventLeave();
    return (
        <div className="App">
            <button>{enablePrevent}enablePrevent</button>
            <button>{DisablePrevent}DisablePrevent</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
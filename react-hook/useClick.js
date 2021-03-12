import React, { useState, useEffect, useRef } from "react";
import ReactDOM from  "react-dom";

const useClick = (onClick) => {
    if(typeof onClick !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        // ComponentDidMount일떄 단한번만 실행된다는 의미
        if(element.current) {
            element.current.addEventListener("click" , onClick);
        }
        // componentWillUnMount일때 호출
        return () => {
            if(element.current) {
                element.current.removeEventListener("click", onClick);
            }
        }
    }, []);
    return element;
}

const App = () => {
    const say = () => console.log("say");
    const title = useClick(say);
    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
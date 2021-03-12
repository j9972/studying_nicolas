import React, { useState, useEffect, useRef } from "react";
import ReactDOM from  "react-dom";

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }
    useEffect (() => {
        window.addEventListener("onLine", handleChange);
        window.addEventListener("offLine", handleChange);
        () => {
            window.removeEventListener("onLine", handleChange);
            window.removeEventListener("offLine", handleChange);
        }
    }, [])
    return status;
}

const App = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "we went online" : "we are offline");
    }
    const onLine = useNetwork();
    return (
        <div className="App">
            <div>{onLine ? "OnLine" : "OffLine"}</div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
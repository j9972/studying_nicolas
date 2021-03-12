import React, { useState, useEffect, useRef } from "react";
import ReactDOM from  "react-dom";

const useNotification = (title, options) => {
    if(!("Notification" in window))
}

const App = () => {
    return (
        <div className="App">
            <div>Hi</div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
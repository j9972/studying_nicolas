import React, { useState, useEffect, useRef } from "react";
import ReactDOM from  "react-dom";

const useConfirm = (msg = "", onConfim, onCancel) => {
    if(!onConfim || typeof onConfim !== "function" ) {
        return;
    }
    if(onCancel && typeof onCancel !== "function" ) {
        return;
    }
    const confirmAction = () => {
        if(confirm(msg)) {
            onConfim();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}

const App = () => {
    const deleteWorld = () => {
        console.log("delete");
    }
    const abort = () => console.log("Aborted");
    const confirmDelelte = useConfirm("r u sure",deleteWorld);
    return (
        <div className="App">
            <button onClick={confirmDelelte}>Delete the World</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
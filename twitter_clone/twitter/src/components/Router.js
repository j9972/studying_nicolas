import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    // useState의 값이 false면 auth고 true면 home page가 나타나게 된다
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    </> 
                    ) : ( 
                    <Route exact path="/">
                        <Auth />
                    </Route> 
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;
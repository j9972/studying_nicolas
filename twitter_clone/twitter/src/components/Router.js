import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn , userObj }) => {
    // useState의 값이 false면 auth고 true면 home page가 나타나게 된다
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/">
                        <Home userObj={userObj}/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile userObj={userObj}/>
                    </Route>
                    <Redirect from="*" to="/" />
                    </> 
                    ) : ( 
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route> 
                        <Redirect from="*" to="/" />
                    </>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;
import { authService, dbService } from "fbase";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

export default ({userObj}) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/");
    };
    useEffect(() => {
        const getMyNweets = async() => {
            const nweets = await dbService.collection("nweets").where("creatorId", "==", userObj.uid);
            console.log(nweets.docs.map(doc => doc.data()));
        }
    })
    return (
    <>
        <button onClick={onLogOutClick}>Log Out</button>
    </>
    )
}
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const getNNweets = async() => {
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((document) => console.log(document.data()));
    }
    useEffect(() => {
        getNNweets();
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            nweet, // state의 nweet랑 같은 거니까 이렇게 둬도 된다
            createdAt: Date.now(),
        });
        setNweet("");
    };
    const onChange = (event) => {
        const {target:{value}} = event;
        setNweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="whats on ur mind?" maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
        </div>
    );
};
export default Home;
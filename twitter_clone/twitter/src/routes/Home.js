import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const getNNweets = async() => {
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((document) => {
            const nweetObject = {
                ...document.data(),
                id:document.id,  
            };
            setNweets(prev => [nweetObject, ...prev]);
        });
    }
    useEffect(() => {
        // 새로고침 + CRUD할때마다 업로드
        dbService.collection("nweets").onSnapshot(snapshot => {
            const nweetArray =  snapshot.docs.map(doc => ({id:doc.id, ...doc.data(), }));
            setNweets(nweetArray);
        })
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text:nweet, // state의 nweet랑 같은 거니까 이렇게 둬도 된다
            createdAt: Date.now(),
            creatorId: userObj.uid,
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
            <div>
                {nweets.map(nweet => (
                    <div key={nweet.id}>
                        <h1>{nweet.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;
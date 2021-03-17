import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import Nweet from 'components/Nweet';

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState();
    const getNNweets = async() => {
        const dbNweets = await dbService.collection("nweets").get();
        // 이 부분이 realTime
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
    };
    const onFileChange = (event) => {
        const {target:{files}}= event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="whats on ur mind?" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange}/>
                <input type="submit" value="Nweet" />
                {attachment && <img src={attachment} width="50px" height="50px" />}
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
                ))}
            </div>
        </div>
    );
};
export default Home;
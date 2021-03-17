import { dbService } from 'fbase';
import React, { useState } from 'react';


const Nweet = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async() => {
        // confirm만 쳐서 나오는 에러는 window를 붙여준다
        const ok = window.confirm("r u sure?");
        console.log(ok);
        if(ok) {
            //delete ( user 지우는 방법 )
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    };
    const toggleEditing = () => setEditing(prev => !prev);
    const onSubmit = async(event) => {
        event.preventDefault();
        console.log(nweetObj, newNweet);
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text:newNweet,
        });
        setEditing(false);
    }
    const onChange = (event) => {
        const {target:{value},} = event;
        setNewNweet(value);
    }
    return(
        <div>
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder="edit ur nweet" value={newNweet} required onChange={onChange}/>
                            <input type="submit" value="Update Nweet" />
                        </form>
                        <button onClick={toggleEditing}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h4>{nweetObj.text}</h4>
                        {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} width="50px" height="50px" />}
                        {isOwner && (
                            <>
                                <button onClick={onDeleteClick}>Delete Nweet</button>
                                <button onClick={toggleEditing}>Edit Nweet</button>
                            </>
                        )}
                    </>
                )
            }
        </div>
    )
};

export default Nweet;
import { dbService, storageService } from 'fbase';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


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
            // refFromUrl함수로 delete할수도 있다.
            // reference는 진짜 중요하다
            await storageService.refFromURL(nweetObj.attachmentUrl).delete();
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
        <div className="nweet">
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit} className="container nweetEdit">
                            <input type="text" placeholder="edit ur nweet" value={newNweet} required onChange={onChange} className="formInput"/>
                            <input type="submit" value="Update Nweet" className="formBtn"/>
                        </form>
                        <button onClick={toggleEditing} className="formBtn cancelBtn">Cancel</button>
                    </>
                ) : (
                    <>
                        <h4>{nweetObj.text}</h4>
                        {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl}/>}
                        {isOwner && (
                            <div class="nweet__actions">
                                <span onClick={onDeleteClick}><FontAwesomeIcon icon={faTrash} /></span>
                                <span onClick={toggleEditing}><FontAwesomeIcon icon={faPencilAlt} /></span>
                            </div>
                        )}
                    </>
                )
            }
        </div>
    )
};

export default Nweet;
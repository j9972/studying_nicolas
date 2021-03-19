import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import {authService} from 'fbase';

//user가 있는지 확인하는 코드 authService.currentUser
function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        // for logging out
        setUserObj(null); 
      }
      setInit(true);
    });
  }, []);
  // 이 함수는 새로고침의 역할을 할것이다
  const refreshUser = () => {
    const user = authService.currentUser; 
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  }
  return (
    <>
      {init ? (<AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} />) : ("Initializing...")}
    </>
  )
}

export default App;

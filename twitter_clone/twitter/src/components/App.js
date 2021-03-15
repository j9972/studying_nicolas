import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import {authService} from 'fbase';

//user가 있는지 확인하는 코드 authService.currentUser
function App() {
  const [init, setInit] = useState(false);
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    
  }, []);
  // console.log(authService.currentUser)
  // setInterval(() => {
  //   console.log(authService.currentUser);
  // }, 2000);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; { new Date().getFullYear() } Nwitter </footer>
    </>
  )
}

export default App;

import React, { useState } from 'react';
import AppRouter from 'components/Router';
import {authService} from "fbase";

function App() {
  //user가 있는지 확인하는 코드 authService.currentUser
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>;
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  )
}

export default App;

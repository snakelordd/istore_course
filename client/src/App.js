import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import { check } from './http/userAPI'
import AppRouter from './components/AppRouter';
import { NavBar } from './components/NavBar';

const App = observer (() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=> { 
    check().then( data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally( () => setLoading(false))
  }, [])

  if (loading) {
    return( <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}><Spinner animation={'grow'}/></div>)
  }
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;

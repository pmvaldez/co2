import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Registro  from './components/Registro'
import Home from './components/Home'
import Login from './components/Login'
import Collaborator from './components/Collaborator'
import Consultancy from './components/Consultancy'
import { auth } from './BD/firebase'

const App = () => {

  const [firebaseUser, setFirebaseUser] = React.useState(false)
  React.useEffect(() => {
     auth.onAuthStateChanged(user => {
        if(user){
          setFirebaseUser(user)
        }else{
          setFirebaseUser(null)
        }
     })
  }, ) 

  return  firebaseUser !== false ? (
    <>
      <Navbar/>
      <Router>
        <div>
          <Route path="/Home">
              <Home />
          </Route>
          <Route path="/Registro">
              <Registro/>
          </Route>
          <Route path="/MiHuella">
              <Collaborator/>
          </Route>
          <Route path="/Historial">
              <Consultancy/>
          </Route>
          <Route path="/" exact>
              <Login  />
          </Route>
        </div>
      </Router>
      </>
      ) : (
        <div>Cargando</div>
  )
}

export default App

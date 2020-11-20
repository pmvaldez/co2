import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Registro  from './components/Registro'
import Home from './components/Home'
import Login from './components/Login'
import Collaborator from './components/Collaborator'

const App = () => {


    return  (
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
                    <Route path="/" exact>
                        <Login  />
                    </Route>

            </div>
        </Router>
    )
}

export default App

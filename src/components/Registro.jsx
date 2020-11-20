import React, { Fragment } from 'react'
import { db, auth } from '../BD/firebase'
import { Redirect } from 'react-router';
import logo from '../img/logo1.png'
import '../style/login.css'


const Registro = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [, setError] = React.useState(null)
    const [validation, setValidation] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
            setError('Datos vacíos email!')
            return
        }
        if (!pass.trim()) {
            setError('Datos vacíos pass!')
            return
        }
        if (pass.length < 6) {
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
    }

    const register = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            await db.collection('users').doc(res.user.uid).set({
                fechaCreacion: Date.now(),
                displayName: res.user.displayName,
                photoURL: res.user.photoURL,
                email: res.user.email,
                uid: res.user.uid
            })
            setEmail('')
            setPass('')
            setError(null)
            db.collection("users").doc(res.user.uid).get().then((snap) => {
                const user = snap.data();
                console.log('entro', user)
                setValidation(true)
            })
        } catch (error) {
            console.log(error)
            // setError(error.message)
            if (error.code === 'auth/email-already-in-use') {
                setError('Usuario ya registrado...')
                return
            }
            if (error.code === 'auth/invalid-email') {
                setError('Email no válido')
                return
            }
        }
    }, [email, pass])

    return (
        <Fragment>

            {
                validation === false ?
                    (
                            <form onSubmit={procesarDatos} className="form-signin">
                                <div className="text-center mb-4">
        <img className="mb-4" src={logo} alt="" width="150" height="150"/>
        <h1 className="h3 mb-3 font-weight-normal">Huella de carbono</h1>
        <p>Build form controls with floating labels via the pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, Firefox, and IE 10/11 (prefixed).</a></p>
      </div>
      <div className="form-label-group">
                                <input
                                    className="form-control" 
                                    placeholder="Usuario"
                                    required autofocus
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}/>
                                    <label for="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-label-group">
                                <input
                                    className="form-control"
                                    placeholder="Contraseña"
                                    required
                                    type="password"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />
                                <label for="inputPassword">Password</label>
                                </div>
                                <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
                                <button
                                    className="btn btn-lg btnsing btn-block"
                                    onClick={() => register()}
                                >Registrar</button>
                            </form>
                    ) : <Redirect push to="/Home" />

            }


        </Fragment>
    )
}

export default Registro
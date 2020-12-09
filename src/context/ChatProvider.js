import React from 'react';
import  {db, auth, provider} from '../firebase'

export const ChatContext = React.createContext()

const ChatProvider = (props) => {

    const dataUser = { uid : null, email : null, estado : null }
    const [user, setUser] = React.useState(dataUser)
    const [mensajes, setMensajes] = React.useState([])

    React.useEffect(() => {
        detectarUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const detectarUser = () => {
        auth.onAuthStateChanged(usuario => {
            if (usuario) {

                setUser({uid : usuario.uid, email : usuario.email, estado : true })
                cargarMensajes()

            } else {
                setUser({uid : null, email : null, estado : false})
            }
        })
    }


    const ingreso = async () => {
        try {

            await auth.signInWithPopup(provider)

        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    const cargarMensajes = () => {

        db.collection('chat').orderBy('fecha').onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            setMensajes(arrayMensajes)
        })

    }

    const agregarMensajes = async (uid, texto) => {
        try {

            await db.collection('chat').add({
                fecha : Date.now(),
                texto,
                uid
            })

        } catch(error) {
            console.log(error)
        }
    }

    return (
        <ChatContext.Provider value={{user, ingreso, cerrarSesion, mensajes, agregarMensajes}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider

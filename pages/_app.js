import '@/styles/globals.css'
import { useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth,db} from "../firebase"
import Login from './login'
import Loading from '@/components/Loading'
import firebase from 'firebase'
export default function App({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth)
  useEffect(() => {
    if(user){
      db.collection('users').doc(user.id).set({
        email:user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl:user.photoURL, 
      },{merge:true})
    }
  }, [user])
  
  if(loading) return <Loading/>
  if(!user) return <Login/>
  return <Component {...pageProps} />

}

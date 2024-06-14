import {useContext} from 'react'
import authContext from './context/auth-context';

function Authenticate(){
    // value içinde ne varsa çekilebilir useContext ile
    const {status,login} = useContext(authContext);

    //const auth = useContext(authContext);
    //console.log(auth.status);
    console.log(status);
    return (
        <>
        <h1>Giriş yaptın mı ?</h1>
        {
            status ? 
            <p>Çoktandır buralardayım</p>
            :
            <p>Yok ab</p>
        }
        <button onClick={login}>Giriş yap</button>
        </>
    )
}

export default Authenticate;
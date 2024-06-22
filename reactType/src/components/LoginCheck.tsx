import React,{useState} from 'react'


type UserType = {
    name : string;
    email : string;
    phone : string
}

function LoginCheck() {
    // baslangicta null olmasi icin
    //const [user,setUser] = useState<UserType | null>({null});
    const [user,setUser] = useState<UserType | null>({} as UserType);

    const handleLogin = () => {
        setUser({
            name : "John Doe",
            email : "john@example.com",
            phone : "1234567890"
        });
    }

    const handleLogout = () => {
        // bu da bir yöntem ama yukarda tanımlı olmalı
        setUser({} as UserType);
    }


  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Log out</button>
        <div>
            <p>
                {/* oladabilir olmayada */}
                {user?.name}<br/>
                {user?.email}<br/>
                {user?.phone}<br/>
            </p>
        </div>
    </div>
  )
}
 
export default LoginCheck
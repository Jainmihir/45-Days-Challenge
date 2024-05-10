# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Context Api :-
- we created a global file to pass the data from child component to parent component.
- in prop drilling the data should be pass from parent to child1 to child 2 to child 3 so we use context api for this.
- In the context API we created a global file then inside the global file we created some variable then access to lower child where we used.
- some are the solutions of this approach and state management :-
- Context API.
- Redux ->  Redux toolkit(RTK) , react-redux.
- Zustand.




## Implementation of basic Login Form :-

- Created a file index.js and inside that we created a context.
- created a file like global variable usercontext

```

import React from "react";

const UserContext = React.createContext()

export default UserContext;

```

- Created A provider for this approach  
- <UserContext.provider> inside this we created a coomponents so the components will access those variable  </UserContext.provider>

- children is a genric name that can be pass the components 
- and we pass the variable inside he usercontextProvider
- like we call the api or variables

``` 
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user,setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

```


- Then we created a context Provider for in App Components

```
import UserContextProvider from './context/UserContextProvider'

function App(){
    <UserContextProvider>
        <h1>React With Mihir </h1>
    </UserContextProvider>
    
}
export default App
```



- we created a components 
-Login.jsx

```
import React,{useContext,useState} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser}  = useContext(UserContext);
    // use context is used for the context of global variable


    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password});
    }

    return (
        <div>
            <h2>
                Login
            </h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            {"   "}
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Login
```


- we created a Profile.jsx :-

```
import React , {useContext}from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext);
    // access the global variable with the usecontext everywhere

    if(!user) return <div> Please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile

```




- We update the App.jsx

```
import './App.css'
import React from 'react'
import Profile from './component/Profile'
import Login from './component/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
     <h1>Login User </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

```
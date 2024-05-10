import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed,setChracterAlllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  // kis bhi chiz ka refernce lena hoo toh useref ka use kroo
  const passwordRef = useRef(null);
  
  // usecallback is a react hook that let you cache a function defines between re-renders.
  // usecallback cache me rakhta h functions ko 
  // or method ko optimize kroo or memorize kroo

  const passwordGenrator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="@#$%^&!~*-+=-";

    for(let i=0;i<=length;i++){
      let char = Math.floor(Math.random() * str.length+1 );
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length,numberAllowed,characterAllowed,setPassword])


  // use effect -> page load hoo to me first time pr call hojaunga or agr inme se koi dependency array kuch hua yh bdla toh me dubra re render hojaunga  
  // passwordGenrator(); // asee nhi kr skte call function ko because of soo many re-render
  // use effect me jo jo dependencies me kuch bhi ched chad hoo toh dubra run ho

  useEffect(()=> {
    passwordGenrator();
  }, [numberAllowed,length,characterAllowed,passwordGenrator])



  const copyPasswordToClibBoard = useCallback( () => {
    passwordRef.current?.select(); // password ref isliye liya tha ki selected value pr selected blue color aajaye
    // passwordRef.current?.setSelectionRange(0,4); 4 value hee leni hoo
    window.navigator.clipboard.writeText(password);
  },[password])
  

  

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md px-4 my-8 rounded-lg text-orange-500 bg-gray-700'> 
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          ></input>
          <button onClick={copyPasswordToClibBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
     
     <div className='flex items-center gap-x-1 '>
      <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setLength(e.target.value)}}
          ></input>
          <label>Length : {length}</label>
      </div>
    <div className='flex items-center gap-x-1'>
    <input
      type="checkbox"
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={() => {
        setNumberAllowed((prev) => !prev)
      }}
      ></input>
    <label htmlFor="numberInput">Numbers</label>

    </div>
    <div className='flex items-center gap-x-1'>
    <input
      type="checkbox"
      defaultChecked={characterAllowed}
      id="characterInput"
      onChange={() => {
        setChracterAlllowed((prev) => !prev)
      }}
      ></input>
    <label htmlFor="characterInput">Chracters</label>

    </div>

      </div>
    
 
  )
}

export default App

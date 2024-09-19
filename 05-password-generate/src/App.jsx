import React, { useState, useCallback, useEffect, useRef }  from "react";

function App() {
  const [ numAllowed,setNumAllowed ] = useState(false);
  const [ symAllowed,setSymAllowed ] = useState(false);
  const [ length,setLength ] = useState(8)
  const [password, setPassword] = useState("")
  const reference = useRef()
  const [ color,setColor] = useState('bg-blue-700');
  const [ copyText,setCopyText] = useState('copy');
  const [ timer,setTimer ] = useState(60)

  const passwordGenerator = useCallback(() => {
    const numString = '0123456789';
    const symString = '!@#$%&*(){}[]:;,.?/*-+='
    const alphaString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passString = alphaString;
    let passGenerated = '';
    if(numAllowed){
      passString+=numString;
    }
    if(symAllowed){
      passString+=symString;
    }
    for(let i=0; i<length; i++) {
      passGenerated += passString.charAt(Math.floor(Math.random()*passString.length+1))
    }
    setPassword(passGenerated)
  },[numAllowed,symAllowed,length])

  const copyToClipbord = ()=>{
    /*//both line is used to copy in clipboard
    reference.current.select();
    document.execCommand("copy");
    */
    reference.current.select();//this line is not compulsory for below line
    window.navigator.clipboard.writeText(password)//variable ma jo bhi value raha ga usko copy kar daga"I am Password"
    setColor((color==='bg-blue-700') ? 'bg-green-700' : 'bg-blue-700')
    setCopyText((copyText==='copy') ? 'coped' : 'copy')
    let sec=60;
    const startTimeing = setInterval(() => {
      sec=sec-1;
      setTimer(sec)
      console.log(sec);
      if(sec<=0){
        clearInterval(startTimeing)
        passwordGenerator()
        setTimeout(() => {
          setTimer(60)
        }, 3000);
      }
    }, 1000);
    

    setTimeout(() => {
      setColor('bg-blue-700')
      setCopyText('copy')
    }, 2000);
  }

  useEffect(()=>{
    passwordGenerator()
  },[numAllowed,symAllowed,length])

  return(
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={password}
            readOnly
            ref={reference}
          />
          <button
          className={`outline-none text-white p-3 py-0.5 shrink-0 ${color}`}
          onClick={copyToClipbord}
          >{copyText}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={40}
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                onChange={()=>{
                  setNumAllowed((numAllowed===false) ? true : false)
                }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  onChange={()=>{
                    setSymAllowed((symAllowed===false) ? true : false)
                  }}/>
              <label htmlFor="characterInput">Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <div className=" bg-black text-white rounded-full p-1 px-2">{timer}</div>
              <label htmlFor="characterInput">Timer</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
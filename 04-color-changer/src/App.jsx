import { useState } from "react";
import ButtonColor from "./components/ButtonColor"

function App() {
    const [color,setColor] = useState('black')
    return(
        <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}>
            <div className="fixed flex flex-wrap justify-center bottom-1/2 inset-x-1/2 px-2">
                <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-white">

                    <button  className="outline-none px-4 py-1 text-white text-2xl font-medium rounded-full"
                    style={{backgroundColor:'red'}}
                    onClick={()=>setColor('red')}
                    >Red</button>

                    <button  className="outline-none px-4 py-1 text-white text-2xl font-medium rounded-full"
                    style={{backgroundColor:'green'}}
                    onClick={()=>setColor('green')}
                    >Green</button>

                    <button  className="outline-none px-4 py-1 text-white text-2xl font-medium rounded-full"
                    style={{backgroundColor:'blue'}}
                    onClick={()=>setColor('blue')}
                    >Blue</button>
                </div>
            </div>
        </div>
    )
}
export default App
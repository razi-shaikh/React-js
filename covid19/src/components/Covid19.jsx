// rewrite the code if any arror fix it

import { useEffect,useState } from 'react';
import Card from './Card'




function Covid19(){
    const [Data,SetData] = useState([]);
    const [SelData,SetSelData] = useState([]);
    const [Index,SetIndex] = useState(0);

    async function GetData() {
        const url='https://data.covid19india.org/data.json';
        try {
        const Response= await fetch(url);
        const ResponseJson = await Response.json();
        // console.log(ResponseJson.statewise);
        // console.log(ResponseJson.statewise[0]);
        SetData(ResponseJson.statewise[Index]);
        SetSelData(ResponseJson.statewise);
        
    } catch (err) {
        console.log("ERROR : ",err);
    }
}
// console.log(Data.active);

    useEffect(()=>{
        GetData();
    },[Index]);

    return(
        <>
        <div className=" h-full w-full text-center">
            <div>
                <h2>Live</h2>
                <h1>Covid-19 TRACKER</h1>
                <select name="" id="selectValue"
                className=' rounded-full px-4 py-1 text-l'
                onChange={()=>{
                    // console.log(`${document.getElementById('selectValue').value} selected`)
                    let SelectedValue = document.getElementById('selectValue').value;
                    SetIndex(SelectedValue)
                }}>
                {
                    SelData.map((value,i)=>{
                        return(
                            <option value={i}>
                                {value.state}
                            </option>
                        )
                    })
                }
                </select>
            </div>
        <div className="grid gap-2 grid-cols-1 p-8 sm:grid-cols-3 sm:gap-5 ">
            
            <Card 
            Color="linear-gradient(#FF671F, #FFFFFF, #046A38)"
            Result={Data.state}/>

            <Card
            Color='#4D70C2'
            PreKey='Total'
            Key='Active'
            Result={Data.active}
            />
            
            <Card 
            Color="#29923E"
            PreKey="TOTAL"
            Key="RECOVERED"
            Result={Data.recovered}
            />

            <Card 
            Color="#A39352"
            PreKey="TOTAL"
            Key="DEATH"
            Result={Data.deaths}
            />

            <Card 
            Color="#DE691D"
            PreKey="TOTAL"
            Key="CONFIRMED"
            Result={Data.confirmed}
            />

            <Card 
            Color="#BCA92D"
            PreKey="LAST"
            Key="UPDATE"
            Result={Data.lastupdatedtime}
            />
        </div>
        </div>
        </>
        // <h1>Hello</h1>
    );
}
export default Covid19;
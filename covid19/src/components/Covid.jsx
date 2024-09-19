import { useEffect,useState } from "react";
import Card from './Card'

function Covid() {
const [ data,setData ] = useState([]);
const [ stateData,setStateData ] = useState([]);

    async function getData(){
        const url='https://data.covid19india.org/data.json'
        try{
            const response = await fetch(url)
            const JsonData = await response.json()
            let res = JsonData.statewise[2]
            console.log(res.active);
            setData(JsonData.statewise)
            console.log(data.active);
        }catch(err){
            console.log(`ERROR : ${err}`);
        }
    }

    useEffect(()=>{
        getData()
    },[])
//    console.log('data[1].state',data[1].state);//working
//    console.log('data : ',data);//working
    return (
        <>
        <div className=" h-full w-full text-center">
            <div>
            <h2>Live</h2>
            <h1>Covid-19 TRACKER</h1>
            
            <select name="" id="selectValue"
            // onChange={()=>{
            //     console.log(`${document.getElementById('selectValue').value} selected`)
            //     let selectValue = document.getElementById('selectValue').value;
            //     setStateData(data[i])
            //     console.log(stateData);
            // }}
            >
                {
                    data.map((value,i)=>{
                    return (
                    <option
                    value={i}>
                    {`${value.state}`}{/* ${i} */}
                    </option>)})
                }
            </select>

            </div>
        <div className="grid gap-2 grid-cols-1 p-8 sm:grid-cols-3 sm:gap-5 ">
            
            <Card 
            Color="linear-gradient(#FF671F, #FFFFFF, #046A38)"/>

            <Card
            Color='#4D70C2'
            PreKey='Total'
            Key='Active'
            Result={data[0].active}/>
            
            <Card 
            Color="#29923E"
            PreKey="TOTAL"
            Key="RECOVERED"
            Result={data.recovered}/>

            <Card 
            Color="#A39352"
            PreKey="TOTAL"
            Key="DEATH"
            Result={data.deaths}/>

            <Card 
            Color="#DE691D"
            PreKey="TOTAL"
            Key="CONFIRMED"
            Result={data.confirmed}/>

            <Card 
            Color="#BCA92D"
            PreKey="LAST"
            Key="UPDATE"
            Result={data.lastupdatedtime}/>
        </div>
        </div>
        </>
    )
}

export default Covid
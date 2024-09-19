import { useEffect, useState } from "react";

  function useFetchData(Currency) {
    const [ data,setData ] = useState({})
    // async function FetchData() {
    //     const Url = `https://v6.exchangerate-api.com/v6/cd0b75c46d02aa4e5ccb8db9/latest/${Currency}`
    //     try {
    //     const Response = await fetch(Url)
    //     const JsonResponse = await Response.json();
    //     // console.log(JsonResponse.conversion_rates);//working
    //     setData(JsonResponse.conversion_rates)

    //     } catch (err) {
    //       console.log('ERROR : ',err);
    //     }
    //   }

    //   useEffect(()=>{
    //     FetchData();
    //   },[])
    //   return data;
    useEffect(()=>{
      const Url = `https://v6.exchangerate-api.com/v6/cd0b75c46d02aa4e5ccb8db9/latest/${Currency}`
      fetch(Url)
      .then((Response)=>(Response.json()))
      .then((JsonResponse)=>(setData(JsonResponse.conversion_rates)))
      .catch((err)=>{console.log('ERROR : ',err);})
    },[Currency])
    return data;
  }
  export default useFetchData;
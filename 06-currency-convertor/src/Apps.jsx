import useFetchData from "./hooks/useFetchData";
import Input from "./components/Input";
import { useState } from "react";

function Apps() {
    const [amount,setAmount] = useState(0);
    const [from,setFrom] = useState('USD')
    const [to,setTo] = useState('INR')
    const [convertAmount,setConvertAmount] = useState(0);
    const conversionRate = useFetchData(from);
    const arrayConversionRate = Object.keys(conversionRate)
    
    const convert = () =>{
        setConvertAmount(amount*conversionRate[`${to}`])
    }
    // const cur = 'INR'
    // console.log(from,'   ',to,'    ',conversionRate[`${to}`]);
    // console.log(convertAmount);

    const swap = () => {
        // console.log(`amount : ${amount} convert : ${convertAmount}`);
        setAmount(convertAmount);
        setConvertAmount(amount);
        setFrom(to);
        setTo(from);
    }

    return (
      <>
      <h1 className=" text-4xl text-white">Currency Convertor</h1>
        <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            
            <div className="w-full mb-1">
              <Input
              currencyOption = {arrayConversionRate}

              amountValue={amount}
              onAmountChange = {(newAmount)=>(setAmount(newAmount))}

              currencyValue={from}
              onCurrencyChange = {(newCurrency) => (setFrom(newCurrency))}
              
              amountDisable={false}
              currencyDisable={false}/>
              </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}>
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
              <Input
              currencyOption = {arrayConversionRate}

              amountValue={convertAmount}
                
              currencyValue={to}
              onCurrencyChange = {(newCurrency) => (setTo(newCurrency))}
              
              amountDisable={true}
              currencyDisable={false}/>
                </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    {`Convert ${from} To ${to}`}
                  </button>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}
export default Apps
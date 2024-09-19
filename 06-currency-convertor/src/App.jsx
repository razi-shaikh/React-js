import useFetchData from "./hooks/useFetchData";
import InputBox from "./components/InputBox";
import { useState } from "react";



function App() {
  const [ amount,setAmount ] = useState(0);
  const [ convertedAmount,setConvertedAmount ] = useState(5);
  const [ from,setFrom ] = useState('USD');
  const [ to,setTo ] = useState('INR');
  const conversionRate = useFetchData(from);
  // console.log(conversionRate,'fetching data from hooks');//working
  // console.log(conversionRate.AED,'fetching data from hooks');//working
  // let arrayConversionRate=[]
  // if(conversionRate!=undefined){
    const arrayConversionRate = Object.keys(conversionRate)
    // console.log('success');
  // }
  // else{
    // console.log('undifiend error');
  // }
  // console.log(arrayConversionRate,'getting keys');//working
  // console.log(arrayConversionRate);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
            
            <div className="w-full mb-1">
              <InputBox
              label='From'
              amountDisabled = {false}
              currencyOption = {arrayConversionRate}
              value={amount}/>
              </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                  label='To'
                  amountDisabled = {true}
                  currencyOption = {arrayConversionRate}
                  value={convertedAmount}/>
                </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    {`Convert ${from} To ${to}`}
                  </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App
function Card({
    Color='Green',
    PreKey='OUR',
    Key='COUNTRY',
    Result='INDIA',
    }) {
    return(
        <>
        {/* <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 p-8"> */}
            <div className={`items-center text-center text-xl p-5 rounded-3xl`}
            style={{background:Color}}
            >{PreKey}
            <span className=" text-5xl"> {Key}</span>
            <div className=" text-5xl mt-3">{Result}</div>
            </div>
        {/* </div> */}
        </>
    )
}
export default Card
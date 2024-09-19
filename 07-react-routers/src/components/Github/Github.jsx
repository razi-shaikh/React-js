import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState('')
  useEffect(() => {
    const url = 'https://api.github.com/users/hiteshchoudhary'
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData)
      })
      .catch((err) => {
        console.log(`ERROR OCCURIED : ${err}`);
      })
    // try {
    //   const response = await fetch(url)
    //   const jsonData = await response.json();
    //   console.log('GitHub Json Data ',jsonData);
    //   console.log('GitHub avatar_url Data ',jsonData.avatar_url);
    //   setData(jsonData)
    // } catch (err) {
    //   console.log(`ERROR OCCURIED : ${err}`);
    // }
  }, [])

  return (
    <>
      <div>Github : {data.avatar_url}</div>
      <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github
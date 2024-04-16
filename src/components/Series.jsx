import React, { useEffect } from 'react'

const Series = () => {
    const [data, setData] =React.useState([]);
    useEffect(() => {
     async function getData() {
        //declaring async function
        const get = await fetch(`https://www.episodate.com/api/most-popular?page=1`);
        const res = await get.json();
        setData(res); 
      }
      getData();
    
    }, [])
    console.log("dt",data.tv_shows);
    
  return (
    <div className=' grid md:grid-cols-5 grid-cols-2 gap-x-2 gap-y-1 py-3 px-14 h-48'>
     
       <h1>This is Series</h1>
    </div>
  )
}

export default Series

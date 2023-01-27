import React, { useEffect, useState } from 'react'
import Pagination from '../pagination/Pagination'

import Loading from '../loading/Loading';
const api = 'https://api.sampleapis.com/coffee/hot'
import './api.css'



export default function Api() {
    const [data , setData] = useState ( [ ] ) ;
    const [loading , setLoading] = useState (false)
     
    const fetchedData = async (url) => {
        const res = await fetch(url);
        const json = await res.json ();
        setData(json)
    }
console.log(data)


    useEffect(()=>{ 
         setLoading (true)
         setTimeout(() => {
            setLoading (false)
          }, 3000);
        fetchedData(api)
    }, [] )

    if (loading) {
        return (
            <main><Loading/></main>
        )
    }
 
  return  <Pagination data={data}/>
  
}

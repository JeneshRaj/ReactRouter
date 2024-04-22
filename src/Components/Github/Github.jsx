import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Github() {
    const [data,setData] = useState([])

    useEffect(()=> {
        fetch('https://api.github.com/users/JeneshRaj')
        .then(response => response.json())
        .then(data=> {
            console.log(data);
            setData(data)
        })

    },[])
  return (
    <div className = "text-center text-3xl bg-black m-4 p-4 text-white ">
        GitHub Followers: {data.followers}   
        <img src = {data.avatar_url} alt = "git user image "  width = {300}/>
    </div>
  )
}

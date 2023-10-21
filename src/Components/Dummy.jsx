import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Dummy() {
    const[state,setState]=useState([])
  return (
    <div>
        <button onClick={()=>{axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{

setState(res.data)
}).catch((rej)=>{
            console.log('failed');
        })
        }}>click</button>
        {
            state.map((obj=>{
                console.log(obj);
            
                return(
                    <div>
                        <h1>{obj.name}</h1>
                        <h4>{obj.email}</h4>
                    </div>
                )
            }))
        }

    </div>
  )
}

export default Dummy
import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance  from './axios'
import {API_KEY,base_url} from '../Constants/constants'
import { useScrollTrigger } from '@mui/material'


function Banner() {
      const [movie, setMovie] = useState()

  useEffect(() => {
    instance.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results[0]);
      setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length)])
    })


    

   
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?base_url+movie.backdrop_path: " "})`}}>
        <div className="content">
            <h1 className='title'>{movie?movie.title : ''}</h1>
            <div className="banner_buttons">
                <div className="button">Play</div>
                <div className="button">My list</div>
            </div>
            <h1 className='description'>
              {
                movie? movie.overview:''
              }
            </h1>
        </div>

    </div>
  )
}

export default Banner
import React from 'react'
import './Row.css'
import { useEffect,useState } from 'react'
import instance from './axios'
import {base_url,API_KEY} from '../Constants/constants'
import youtube from 'react-youtube'
import YouTube from 'react-youtube'
import axios from 'axios'

function Row({title,isSmall,url}) {
const [movies,setMovies]=useState([])
const [urlId,setUrlId]=useState('')
  useEffect(() => {
    instance.get(url).then((res)=>{
      
      console.log(res.data.results);
      setMovies(res.data.results)
    }).catch((rej)=>{
    
      console.log('error');
    })
  }, [])


   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleMovie=(id)=>{
      instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        if(res.data.results.length!==0){
        setUrlId(res.data.results[0])

        }else{
          console.log('trailer not available');
        }

       
      }).catch((rej)=>{
        console.log('failed');

      })
      

    }
  
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='posters'>
          {
            movies.map((ele)=>{
              return(
                            <img  onClick={()=>handleMovie(ele.id)} className={isSmall?'smallPoster':'poster'} src={`${base_url+ele.backdrop_path}`} alt="poster" />

              )
            })
          }
        </div>

{
  urlId &&  <YouTube  videoId={urlId.key} opts={opts} />
}



       

    </div>
  )
}

export default Row
import React, { useState,useEffect } from 'react'
import axios from '../axios'
import '../Components/Row.css'
const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    //A snippet of code which runs based on a specific/variable
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {/* container->posters */}
            {movies.map(movie=>(
            <img
             key="movie.id" className={`row__poster ${isLargeRow&&"row__posterLarge"}`}  src={`${baseUrl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt ={movie.name}>
            </img>
            ))}
            </div>
        </div>
    )
}


export default Row

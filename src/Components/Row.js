import React, { useState,useEffect } from 'react'
import axios from '../axios'
import '../Components/Row.css'
const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl}) {
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
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            <div className="row__posters">
            {/* container->posters */}
            {movies.map(movie=>(
            <img key="movie.id" className="row__poster"src={`${baseUrl}${movie.poster_path}`} alt ={movie.name}></img>
            ))}

            </div>
        </div>
    )
}


export default Row

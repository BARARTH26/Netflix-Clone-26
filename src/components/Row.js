import React,{useState,useEffect} from 'react';
import "./Row.css";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({Title,fetchUrl,isLargeRow}) {

    const [movies,setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl] = useState("");
    const[close,setClose] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);  //here gives as object.
            return request;
        }
        fetchData();
    },[fetchUrl])

    const opts = {
        height:"390",
        width: "100%",
        playerVars : {
            autoplay : 1,
        }
    }

    const handleClick =(movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name || movie?.title).then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log("url====>>>>",url)
                setTrailerUrl(urlParams.get("v"));
            }).catch(err => alert(err.message));
        }
    }


    return (
        <div className="row">
            <h1>{Title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        onClick={()=> handleClick(movie)}
                        className = {`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        key={movie.id} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube onClose={()=>setClose(false)} videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row
 
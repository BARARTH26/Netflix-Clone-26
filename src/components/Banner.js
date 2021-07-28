import React,{useState,useEffect} from 'react';
import "./Banner.css";
import axios from "../axios";
import requests from "../requests"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


function Banner() {

    const[movie,setMovie] = useState("");
    const[trailer,setTrailer] = useState("");
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            //console.log(request);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length -1)
            ]);
            return request;
        }
        fetchData()
    }, [])

    setTimeout(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            //console.log(request);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length -1)
            ]);
            return request;
        }
        fetchData()
    },5000)
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...." : str;
    }

    const opts = {
        height:"390",
        width: "100%",
        playerVars : {
            autoplay : 1,
        }
    }

    const handleMovie =(movie) => {
        if(trailer){
            setTrailer("")
        }else{
            movieTrailer(movie?.name || movie?.original_name).then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log("url====>>>>",url)
                setTrailer(urlParams.get("v"));
            }).catch(err => alert(err.message));
        }
        setTimeout(() => {
            setTrailer("")
        },180000);
    }


    return (
        <div className="head">
            <header 
                style={{
                    backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition : "center center",
                    backgroundSize : "cover", 
                }}
                className="banner">
                <div className="banner__info">
                    <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button" onClick={()=> handleMovie(movie)}>Play</button>
                        <button className="banner__button">My Lists</button>
                    </div>
                    <h5 className="banner__description">{truncate(movie?.overview,150)}</h5>
                </div>
                <div className="banner__fade"></div>
            </header>
            {trailer && <Youtube videoId={trailer} opts={opts} />}
        </div>
    )
};

export default Banner;

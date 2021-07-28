const API_KEY = "b92b6ec168687549878c8e8cadfe207b";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=IN`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&languages=IN`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
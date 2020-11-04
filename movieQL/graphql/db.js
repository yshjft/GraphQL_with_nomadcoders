/*
export let movies = [
    {
        id:0,
        name : "Star Wars - The new One",
        score : 7,
    },
    {
        id:1,
        name : "Avengers",
        score : 8,
    },
    {
        id:2,
        name : "The God Father",
        score : 9,
    },
];

export const getMovies = () => movies;

export const getById = id  => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length){
        movies = cleanMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie =(name, score ) => {
    const newMovie= {
        id: `${movies.length +1}`,
        name,
        score,
    }
    movies.push(newMovie);
    return newMovie;
}
*/
import fetch from 'node-fetch' 
const API_URL = "https://yts.mx/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
};
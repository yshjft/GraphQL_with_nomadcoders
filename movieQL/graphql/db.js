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
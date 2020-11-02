import {getMovies, getById, addMovie, deleteMovie} from './db';

// query를 해결하는 부분
const resolver={
    Query:{
        /*
            누군가 name이라는 query를 보내면 hys라고 응답함
            name:()=>"hys",     
        */
       movies: () => getMovies(),
       movie: (_, {id}) => getById(id),
    },
    Mutation:{
        addMovie: (_, {name , score})=> addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
} 

export default resolver;
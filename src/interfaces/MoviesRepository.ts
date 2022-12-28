import { Movie } from "./Movie";

export interface MoviesRepository {
    getMovies(): Promise<Movie[]>
    CreateMovie(newMovie: Movie): Promise<void>
}
import { randomUUID } from "crypto";
import { Movie } from "../interfaces";
import { movieRepository } from "../repositories";

type Id = string;

class MovieService {
    private repository = movieRepository;

    async GetMovies(): Promise<Movie[]> {
        return this.repository.getMovies();
    }

    async CreateMovie(newMovie: Omit<Movie, "id">): Promise<Id> {
        const id = randomUUID();
        await this.repository.CreateMovie({id, ...newMovie});
        return id;
    }
}

export const movieService = new MovieService();
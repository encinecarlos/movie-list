import { Movie, MoviesRepository } from "../interfaces";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const DB_PATH = path.resolve(process.cwd(), 'db.json');

class MovieJsonRepository implements MoviesRepository {
    async CreateMovie(newMovie: Movie): Promise<void> {
        var movies = await this.getMovies();
        movies.push(newMovie);
        await writeFile(DB_PATH, JSON.stringify(movies));
    }

    async getMovies(): Promise<Movie[]> {
        const result = await readFile(DB_PATH);
        return JSON.parse(result.toString() || '[]'); 
    }

}

export const movieRepository = new MovieJsonRepository();
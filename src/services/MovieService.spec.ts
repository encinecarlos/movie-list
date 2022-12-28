import { Movie, MoviesRepository } from "../interfaces";
import { movieService } from "./MovieService";

const movieRepositoryMock: MoviesRepository = {
    getMovies: async (): Promise<Movie[]> => [{
        id: "1",
        title: "Batima",
        poster: "batima poster"
    }],
    CreateMovie: async (newMovie: Movie): Promise<void> => undefined
};

describe("MovieService test suite", () => {
    movieService["repository"] = movieRepositoryMock;
    
    test("Should return a list of movies", async () => {
        const findmoviesSpy = jest.spyOn(movieRepositoryMock, 'getMovies');
        const [result] = await movieService.GetMovies();

        expect(result).toEqual({
            id: "1",
            title: "Batima",
            poster: "batima poster"
        });

        expect(findmoviesSpy).toHaveBeenCalled();
    });

    test("should create a movie", async () => {
        const createMovieSpy = jest.spyOn(movieRepositoryMock, "CreateMovie");
        const id = await movieService.CreateMovie({title: "bla"});

        expect(id).not.toBeNull();

        expect(createMovieSpy).toHaveBeenCalled();
    });
});
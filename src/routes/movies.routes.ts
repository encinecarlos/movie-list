import { Router } from "express";
import { movieService } from "../services";

const router = Router();

router.route("/movies")
.get(async (req, res) => {
    const movies = await movieService.GetMovies();
    res.json({movies});
}).post(async (req, res) => {
    const id = await movieService.CreateMovie(req.body);
    res.status(201).json({id});
});

export const moviesRoute = router;
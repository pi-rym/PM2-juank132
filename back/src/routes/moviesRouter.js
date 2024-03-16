const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRouter = Router();

// moviesRouter.get("/", moviesController.getMovies)

moviesRouter.get("/", moviesController.appMovies)

module.exports = moviesRouter;
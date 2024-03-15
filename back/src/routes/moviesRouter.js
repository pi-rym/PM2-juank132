const { Router } = require("express");
const moviesController = require("../controllers/getMovies");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getMovies)

module.exports = moviesRouter;
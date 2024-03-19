const moviesService = require("../services/movieService")

module.exports = {
    appMovies: async(req, res) => {
        try {
            const movies = await moviesService.getMovies()
            res.status(202).json(movies)

        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
};
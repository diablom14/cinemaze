import express from "express"
import { addMovies, getNowPlayingMovies } from "../controllers/show.controller.js"
import { protectAdmin } from "../middlewares/auth.middleware.js"

const showRouter = express.Router()
showRouter.get("/now-playing",protectAdmin, getNowPlayingMovies)
showRouter.post("/addShow",protectAdmin,addMovies)
export default showRouter
import express from 'express'
import MoviesController from './movies.controller.js'
import ReviewsController from './reviews.controller.js'

const router = express.Router() // get access to express router

//router.route('/').get((req,res) => res.send('hello world'))
router.route('/').get(MoviesController.apiGetMovies)
router.route("/id/:id").get(MoviesController.apiGetMovieById)
router.route("/ratings").get(MoviesController.apiGetRatings)

//-- we add a route '/review' which handles post, put and delete http requests all within this one route call
//   that is to say, if the '/review' route receives a post http request to add a review, we call apiPostReview
//   if '/review' receives a put http request to edit a review, call apiUpdateReview
//   and finally, if '/review' receives a delete http request to delete a review, call apiDeleteReview --//
router
    .route("/review")
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)

export default router

// final product
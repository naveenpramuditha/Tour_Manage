import express from 'express'
import { createTour, deleteTour, updateTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTours, getTourCount  } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router()

//create new tour
router.post('/', verifyAdmin,createTour);

//update tour
router.put('/:id',verifyAdmin, updateTour);

//delete tour
router.delete('/:id',verifyAdmin, deleteTour);

//get Single tour
router.get('/:id', getSingleTour);

//get All tour
router.get('/', getAllTour);

//get tour by search
router.get('/search/getTourBySearch' , getTourBySearch );

//get featured
router.get('/search/getFeaturedTours' , getFeaturedTours );

//get tour count
router.get('/search/getTourCount' , getTourCount );


export default router;
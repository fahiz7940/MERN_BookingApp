import express from 'express'
import  {createRservation, getAllReservation, deleteReservation} from '../controllers/reservationControllers.js'

const router = express.Router()
router.post('/create', createRservation)
router.get('/get', getAllReservation)
router.delete('/delete/:id', deleteReservation)

export default router;
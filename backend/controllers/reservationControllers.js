import reservation from '../models/reservation.js';
import Reservation from '../models/reservation.js'

const createRservation = async (req, res) => {
    try {
      const { name, email, phone, date, time, guests } = req.body;
  
      if (!name || !email || !phone || !date || !time || !guests) {
        return res.json({ error: "All fields are required" });
      }
  
      const newReservation = new Reservation({
        name,
        email,
        phone,
        date,
        time,
        guests,
      });
  
      await newReservation.save();
  
      res.json({
        message: "Reservation created successfully",
        reservation: newReservation,
      });
    } catch (error) {
      console.error(error);
      res.json({ error: "Error creating reservation" });
    }
  };


const getAllReservation = async (req,res) => {
    try {
        const reservations = await Reservation.find()
        res.json(reservations)
    } catch (error) {
        res.json({error: "Error fec`tching"})
    }
}

const deleteReservation = async (req,res) => {
    try {
        const { id } = req.params;
        await Reservation.findByIdAndDelete(id);
        res.json({success:true, message: "Reservation deleted successfully"})
    } catch (error) {
        res.json({success:false, error: "Error deleting reservation"})
    }
}

export {createRservation, getAllReservation, deleteReservation}


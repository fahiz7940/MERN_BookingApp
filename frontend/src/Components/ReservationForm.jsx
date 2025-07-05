import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1"
  });

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${backendUrl}/api/reservations/create`, formData);
      toast.success("Reservation Successful");

      setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "1" });
    } catch (error) {
      console.log("Error making reservation", error);
      toast.error("Failed to submit reservation");
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = hour + 1 < 12 ? "AM" : "PM";
      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br bg-[#f3ebdc] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[#6c643e] to-[#bd8246] p-8 rounded-2xl shadow-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Book a Reservation
        </h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChanges}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  text-white"
          required
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChanges}
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  text-white "
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChanges}
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  text-white"
          required
        />

        <input
          name="date"
          value={formData.date}
          onChange={handleChanges}
          type="date"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
          required
        />

        <select
          name="time"
          value={formData.time}
          onChange={handleChanges}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
          required
        >
          <option value="">Select Time</option>
          {generateTimeSlots().map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <select
          name="guests"
          value={formData.guests}
          onChange={handleChanges}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
          required
        >
          {[...Array(10).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Guest(s)
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-gradient-to-r bg-[#2c2406] text-white p-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;

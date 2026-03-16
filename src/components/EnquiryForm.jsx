import React, { useState } from "react";
import { vehicles } from "../data/car";

const EnquiryForm = ({ pickup = "", destination = "" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup,
    destination,
    date: "",
    travellers: "",
    vehicle: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const inputStyle =
    "w-full border border-gray-300 bg-white text-gray-800 placeholder:text-gray-500 p-3 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!form.pickup.trim()) newErrors.pickup = "Pickup location is required";

    if (!form.destination.trim())
      newErrors.destination = "Destination is required";

    if (!form.date) {
      newErrors.date = "Travel date is required";
    }

    if (!form.travellers) newErrors.travellers = "Select passengers";
    if (!form.vehicle) newErrors.vehicle = "Select vehicle";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("page", window.location.href);

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      alert("Enquiry submitted successfully!");

      setForm({
        name: "",
        phone: "",
        pickup: "",
        destination: "",
        date: "",
        travellers: "",
        vehicle: "",
        message: "",
      });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200 space-y-6"
    >
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-800">
          Enquiry <span className="text-sky-600">Now</span>
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Tell us your travel plan and get a quick quote
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Full Name"
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Pickup */}
        <div>
          <input
            type="text"
            name="pickup"
            value={form.pickup}
            placeholder="Pickup Location"
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.pickup && (
            <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>
          )}
        </div>

        {/* Destination */}
        <div>
          <input
            type="text"
            name="destination"
            value={form.destination}
            placeholder="Drop Location"
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.destination && (
            <p className="text-red-500 text-xs mt-1">{errors.destination}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <input
            type="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            value={form.date}
            onChange={handleChange}
            className={`${inputStyle} text-gray-700`}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>

        {/* Travellers */}
        <div>
          <select
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            className={`${inputStyle} text-gray-700`}
          >
            <option value="">No. of Passengers</option>
            <option value="1-2">1-2</option>
            <option value="3-4">3-4</option>
            <option value="5-6">5-6</option>
            <option value="7+">7+</option>
          </select>

          {errors.travellers && (
            <p className="text-red-500 text-xs mt-1">{errors.travellers}</p>
          )}
        </div>

        {/* Vehicle */}
        <div>
          <select
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            className={`${inputStyle} text-gray-700`}
          >
            <option value="">Select Vehicle</option>

            {vehicles.map((car) => (
              <option key={car.id} value={car.name}>
                {car.name} ({car.specs.seats})
              </option>
            ))}
          </select>

          {errors.vehicle && (
            <p className="text-red-500 text-xs mt-1">{errors.vehicle}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <textarea
        name="message"
        value={form.message}
        placeholder="Any special request?"
        onChange={handleChange}
        rows="3"
        className={inputStyle}
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 hover:scale-[1.02] active:scale-[0.98] transition"
      >
        Get Travel Quote
      </button>
    </form>
  );
};

export default EnquiryForm;

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" }); // Clear errors on typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.message) errors.message = "Message is required";
    
    setFormErrors(errors);

    // Stop submission if there are errors
    if (Object.keys(errors).length > 0) return;

    // Handle form submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="py-16 bg-white flex flex-col items-center pt-1 mb-4 px-4">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-teal-700 uppercase">Send Message</h2>
        <p className="text-orange-500 italic text-lg mt-1">Keep in Touch</p>
        <div className="w-16 border-t-2 border-gray-300 mx-auto mt-2"></div>
      </div>

      {/* Form Section */}
      <form className="mt-8 w-full max-w-3xl space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              placeholder="NAME *"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="E-MAIL *"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
          </div>

          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              type="phone"
              id="phone"
              placeholder="PHONE NUMBER"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            placeholder="MESSAGE *"
            rows="6"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-pink-800 transition"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setSuccess(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">
        Have questions? Send a message and we’ll get back to you.
      </p>

      <div className="contact-grid">
        {/* FORM */}
        <div className="card-box">
          <h3>Send us a message</h3>

          {success && (
            <div className="success">✅ Message sent successfully!</div>
          )}

          <form className="form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
            />

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* INFO */}
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p>
            <b>Email:</b> support@parikshe.in <br />
            <b>Phone:</b> +91 98765 43210 <br />
            <b>Location:</b> Bengaluru, Karnataka <br />
          </p>

          <div style={{ marginTop: "14px" }}>
            <h3>Working Hours</h3>
            <p>
              Monday - Saturday <br />
              9:00 AM to 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

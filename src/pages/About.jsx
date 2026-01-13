import React from "react";

export default function About() {
  return (
    <div className="page">
      <h1 className="page-title">About Us</h1>
      <p className="page-subtitle">
        Parikshe is a digital learning platform helping SSLC & PUC students
        prepare with high-quality content, tests and guidance.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div className="card-box">
          <h3>Our Mission</h3>
          <p className="card-desc">
            Make education accessible, simple, and effective for every student.
          </p>
        </div>

        <div className="card-box">
          <h3>Our Vision</h3>
          <p className="card-desc">
            To build Karnataka’s most trusted learning platform for school and
            college students.
          </p>
        </div>
      </div>

      <div className="card-box" style={{ marginTop: "16px" }}>
        <h3>What we offer</h3>
        <ul className="list">
          <li>Video lessons</li>
          <li>Notes and important questions</li>
          <li>Practice tests & mock exams</li>
          <li>Performance tracking</li>
          <li>Model question papers</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";

export default function Careers() {
  return (
    <div className="page">
      <h1 className="page-title">Careers</h1>
      <p className="page-subtitle">
        We are hiring passionate learners and builders. Join us and help students
        learn better.
      </p>

      <div className="jobs-grid">
        <div className="job-card">
          <h3 className="job-title">Frontend Developer Intern</h3>
          <p className="job-info">
            <b>Location:</b> Bengaluru <br />
            <b>Skills:</b> React, JavaScript, CSS, Git <br />
            <b>Type:</b> Internship
          </p>
          <button className="btn btn-primary">Apply Now</button>
        </div>

        <div className="job-card">
          <h3 className="job-title">Content Creator Intern</h3>
          <p className="job-info">
            <b>Location:</b> Remote <br />
            <b>Skills:</b> Notes preparation, basic teaching <br />
            <b>Type:</b> Internship
          </p>
          <button className="btn btn-outline">Apply Now</button>
        </div>
      </div>

      <div className="card-box" style={{ marginTop: "18px" }}>
        <h3>How to Apply?</h3>
        <p className="card-desc">
          Send your resume and brief message to:
          <br />
          <b>careers@parikshe.in</b>
        </p>
      </div>
    </div>
  );
}

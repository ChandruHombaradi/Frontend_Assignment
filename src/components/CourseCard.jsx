import React from "react";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-top">
        <span className="tag">{course.tag}</span>
        <h3 className="card-title">{course.title}</h3>
      </div>

      <p className="card-desc">{course.description}</p>

      <div className="card-footer">
        <span className="price">{course.price}</span>
        <button className="btn" onClick={() => navigate(`/course/${course.id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
}

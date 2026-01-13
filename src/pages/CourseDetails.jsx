import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api/axios";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        setError("");
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        setError("Course not found / API error");
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
  }, [id]);

  if (loading) return <Loader text="Loading course..." />;
  if (error) return <ErrorBox message={error} />;

  return (
    <div className="page">
      <Link to="/" className="btn btn-outline">← Back</Link>

      <h1 style={{ marginTop: "14px" }}>{course.title}</h1>
      <p style={{ marginTop: "10px" }}>{course.description}</p>

      <div className="info-box" style={{ marginTop: "14px" }}>
        <p><b>Tag:</b> {course.tag}</p>
        <p><b>Price:</b> {course.price}</p>
      </div>

      <button className="btn btn-primary" style={{ marginTop: "14px" }}>
        Enroll Now
      </button>
    </div>
  );
}

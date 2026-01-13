import React, { useEffect, useState } from "react";
import { api } from "../api/axios";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        setError("");
        const res = await api.get("/courses");
        setCourses(res.data);
      } catch (err) {
        setError("Failed to load courses. Please check API server.");
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to Parikshe Learning Platform</h1>
        <p>
          Learn smart with notes, videos, test series and full SSLC preparation.
        </p>
        <div className="hero-actions">
          <a href="/sslc" className="btn btn-primary">
            Explore SSLC
          </a>
          <a href="/contact" className="btn btn-outline">
            Contact Us
          </a>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="section">
        <h2 className="section-title">Courses</h2>

        {loading && <Loader text="Fetching courses..." />}
        {error && <ErrorBox message={error} />}

        {!loading && !error && (
          <div className="grid">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        )}
      </section>

      {/* WHY PARIKSHE SECTION */}
      <section className="section">
        <h2 className="section-title">Why Parikshe?</h2>

        <div className="grid">
          <div className="card">
            <span className="tag">Notes</span>
            <h3 className="card-title">Chapter-wise Notes</h3>
            <p className="card-desc">
              Get clear, easy notes prepared by experts for SSLC and PUC.
            </p>
          </div>

          <div className="card">
            <span className="tag">Tests</span>
            <h3 className="card-title">Mock Tests</h3>
            <p className="card-desc">
              Practice with model papers, timed tests, and track performance.
            </p>
          </div>

          <div className="card">
            <span className="tag">Videos</span>
            <h3 className="card-title">Video Classes</h3>
            <p className="card-desc">
              Learn from video lectures with complete syllabus coverage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

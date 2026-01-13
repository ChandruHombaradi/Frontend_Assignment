import React, { useEffect, useState } from "react";
import { api } from "../api/axios";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";

export default function SSLCStudy() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getSSLC() {
      try {
        setLoading(true);
        const res = await api.get("/courses");
        const sslcOnly = res.data.filter((c) => c.title.toLowerCase().includes("sslc"));
        setCourses(sslcOnly);
      } catch (e) {
        setError("Unable to load SSLC courses");
      } finally {
        setLoading(false);
      }
    }

    getSSLC();
  }, []);

  return (
    <div className="page">
      <h1>SSLC Study Page</h1>
      <p>
        SSLC preparation content, test series, notes, and courses.
      </p>

      {loading && <Loader text="Loading SSLC courses..." />}
      {error && <ErrorBox message={error} />}

      {!loading && !error && (
        <div className="grid">
          {courses.map((c) => (
            <div className="card" key={c.id}>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="card-footer">
                <span className="price">{c.price}</span>
                <button className="btn btn-outline">Start Learning</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // Internship/Full-time
  link: string;
}

const JobFinder = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const searchJobs = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">AI Job & Internship Finder</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter your skills, interests, or field"
          className="flex-1 border p-2 rounded-l-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-lg"
          onClick={searchJobs}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading jobs...</p>}

      <div className="grid gap-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border p-3 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold">{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <p>Type: {job.type}</p>
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobFinder;

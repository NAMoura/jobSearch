import axios from "axios";
import JobCard from "src/components/JobCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  console.log(jobs)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `https://job-listing-test-both.onrender.com/posts/${query}`
        );

        const jobs = response.data.map((job) => ({
          id: job._id,
          profile: job.profile,
          description: job.desc,
          techs: job.techs,
          experience: job.exp,
        }));

        setJobs(jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    const fetchInitialJobs = async () => {
      try {
        const response = await axios.get(
          `https://job-listing-test-both.onrender.com/posts/`
        );
        console.log(response)

        const jobs = response.data.map((job) => ({
          id:job._id,
          profile: job.profile,
          description: job.desc,
          techs: job.techs,
          experience: job.exp,
        }));

        setJobs(jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    if (query.length > 2) fetchJobs();
    if (query.length===0) fetchInitialJobs();
    
  }, [query]);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="flex mb-6 w-52 bg-[#ffffff] p-2 rounded-lg"><MagnifyingGlassIcon className="w-6 h-6 flex-shrink-0" />
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-[#ffffff] block w-40 ml-2 item px-1 rounded"
      />
</div>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  );
}


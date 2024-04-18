
import PropTypes from "prop-types";
import { JobListing } from "./jobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
export const JobListings = ({ isHome = false }) => {
    // console.log(jobs);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

  fetchJobs(); }, []);

  return (
    <>
      <section className=" px-4 py-10" style={{ backgroundColor: "#DAD5F4" }}>
        <div className="container-xl lg:container m-auto">
          <p
            className="h2 text-dark text-center pt-5 pb-5"
            style={{ fontWeight: "bold" }}
          >
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </p>

          <div className="row">
            {loading ? (
              <Spinner loading={loading} />
            ): <>
              {jobs.map((job) => (
              <JobListing key={job.id} {...job} />
            ))}
            </>}
            
          </div>
        </div>
      </section>
    </>
  );
};
JobListings.propTypes = {
  isHome: PropTypes.bool, // Validate isHome prop as a boolean
};
export default JobListings;

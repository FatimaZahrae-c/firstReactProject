import { useState } from "react";
import {FaMapMarker} from 'react-icons/fa'
import { Link } from "react-router-dom";

export const JobListing = (job) => {
  const [showFullDescription, setshowFulldescription] = useState(false);
  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 100) + "...";
  }
  return (
    <div className="col-sm-4">
      <div className="bg-white rounded shadow relative p-4 mb-4">
        <div className="mb-3">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="">{description}</div>
        <Link
          onClick={() => setshowFulldescription((prevState) => !prevState)}
          className="text-indigo-500 mb-4 hover:text-indigo-600 text-dark"
        >
          {showFullDescription ? "Less" : "More"}
        </Link>
        <h6 className="mb-2 mt-3 text-info">{job.salary} /Year</h6>
        <hr style={{ color: "#000" }} />
        <div className="text-danger h5 mb-1 inline">
          <span className="mb-2">
            <FaMapMarker className="mb-4 text-danger " />
          </span>
          {job.location}
        </div>

        <Link to={`/jobs/${job.id}`}>
          <button
            type="button"
            className="btn text-white"
            style={{
              backgroundColor: "#4F2DFA",
              width: "100%",
            }}
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobListing;

import { useState, useEffect ,  } from "react";
import { useParams} from "react-router-dom";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const JobPage = ({ deleteJob }) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
    const [loading, setLoading] = useState([]);
    const navigate = useNavigate();
    
    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this listing ?');
        if (!confirm) return;
        deleteJob(jobId);
        deleteJob(jobId);

        toast.success("Job deleted successfully");

        navigate("/jobs");

    };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <section className="bg-white py-4">
        <div className="container m-auto">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 d-flex align-items-center"
          >
            <FaArrowLeft className="" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50" style={{ backgroundColor: "#DAD5F4" }}>
        <div className="container m-auto py-10 px-6">
          <div className="row ">
            <div className="col-md-12 col-lg-8 ">
              <div
                className="bg-white p-6 rounded shadow mb-4 mt-4 "
                style={{ paddingLeft: "20px" }}
              >
                <div className="text-gray-500 mb-4 pt-3  ">{job.type}</div>
                <h2 className="text-3xl font-bold  mb-4">{job.title}</h2>
                <div className="">
                  <p className="text-danger pb-4">{job.location}</p>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded shadow mb-4 pt-3 pb-2"
                style={{ paddingLeft: "20px" }}
              >
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
              </div>

              <div
                className="bg-white pt-3 pb-2 rounded shadow "
                style={{ paddingLeft: "20px" }}
              >
                <h3 className="text-indigo-800 text-lg font-bold mb-2 ">
                  Salary
                </h3>
                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 mt-4">
              <div
                className="bg-white p-6 rounded shadow mb-4  pt-3 pb-2"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <h4 className="text-xl font-bold mb-6">Company Info</h4>
                <h3 className="text-2xl">{job.company.name}</h3>
                <p className="my-2">{job.company.description}</p>
                <hr className="my-4" />
                <h4 className="text-xl">Contact Email:</h4>
                <p
                  className="my-2  p-2 font-bold"
                  style={{ backgroundColor: "#DAD5F4" }}
                >
                  {job.company.contactEmail}
                </p>
                <h4 className="text-xl">Contact Phone:</h4>
                <p
                  className="my-2 bg-indigo-100 p-2 font-bold"
                  style={{ backgroundColor: "#DAD5F4" }}
                >
                  {job.company.contactPhone}
                </p>
              </div>

              <div
                className="bg-white p-6 rounded shadow pt-3 pb-2 mb-4"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <h4 className="text-xl font-bold mb-4">Manage Job</h4>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="btn btn-primary w-100 mb-4"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="btn btn-danger w-100 mb-3"
                >
                  Delete Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

JobPage.propTypes = {
  deleteJob: PropTypes.func.isRequired,
};
export default JobPage;

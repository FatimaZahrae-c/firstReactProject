import { Link } from "react-router-dom";


export const ViewAllJobs = () => {
  return (
    <div className="conatiner mb-4 mt-4 ">
      <Link to="/jobs">
        <div className="row">
          <div className="col text-center ">
            <button className="btn bg-dark text-white pb-2 pt-2" style={{width:"40%"}}>
              View all jobs
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ViewAllJobs
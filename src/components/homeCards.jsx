import { Link } from "react-router-dom";

export const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="row p-4 rounded-lg">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    For Developers
                  </h2>
                  <p className="card-text mt-2 mb-4">
                    Browse our React jobs and start your career today
                  </p>
                  <Link
                    to="/jobs"
                    className="btn text-white"
                    style={{ backgroundColor: "#4F2DFA" }}
                  >
                    Browse Jobs
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ backgroundColor: "#ECE9F9" }}>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    For Employers
                  </h2>
                  <p className="card-text mt-2 mb-4">
                    List your job to find the perfect developer for the role
                  </p>
                  <Link to="/add-job" className="btn btn-dark">
                    Add Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeCards;

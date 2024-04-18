import react from '../assets/react.svg';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeLinkClass = ({ isActive }) =>
    isActive
      ? "nav-link active text-white bg-dark"
      : "nav-link text-white";
  return (
    <>
      <div style={{ backgroundColor: "#6610f2" }}>
        <nav className="navbar navbar-expand-sm navbar-light  ">
          <div className="container-fluid ">
            <div className="navbar-collapse justify-content-end">
              <ul className="nav nav-pills  ">
                <img className="h-10 w-auto" src={react} alt="React Jobs" />
                <li className="nav-item  " style={{ marginRight: "600px" }}>
                  <a className="nav-link text-white " href="/">
                    ReactJobs
                  </a>
                </li>
                <li className="nav-item " style={{ marginRight: "50px" }}>
                  <NavLink className={activeLinkClass} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" style={{ marginRight: "50px" }}>
                  <NavLink className={activeLinkClass} to="/jobs">
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-item" style={{ marginRight: "200px" }}>
                  <NavLink className={activeLinkClass} to="/add-job">
                    Add Jobs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
// nav-link active text-white bg-dark
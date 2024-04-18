import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const EditJobPage = ({ updateJob }) => {
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
        setTitle(data.title);
        setType(data.type);
        setLocation(data.location);
        setDescription(data.description);
        setSalary(data.salary);
        setCompanyName(data.company.name);
        setCompanyDescription(data.company.description);
        setContactEmail(data.company.contactEmail);
        setContactPhone(data.company.contactPhone);
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  const editJob = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJob(updatedJob);

    toast.success("Job Updated Successfully");

    return navigate(`/jobs/${id}`);
  };

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  return (
    <section className="" style={{ backgroundColor: "#DAD5F4" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-white p-4 shadow rounded">
              <h2
                className="text-center font-weight-bold mb-4"
                style={{ fontWeight: "bold" }}
              >
                Edit Job
              </h2>
              <form onSubmit={editJob}>
                <div className="form-group">
                  <label htmlFor="type" className="font-weight-bold pt-3">
                    Job Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="form-control"
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="title" className="font-weight-bold mt-2">
                    Job Listing Name
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    placeholder="e.g., Beautiful Apartment In Miami"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="description"
                    className="font-weight-bold mt-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    rows="4"
                    placeholder="Add any job duties, expectations, requirements, etc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="salary" className="font-weight-bold mt-2">
                    Salary
                  </label>
                  <select
                    id="salary"
                    name="salary"
                    className="form-control"
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="font-weight-bold mt-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-control"
                    placeholder="Company Location"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <h3
                  className="text-center font-weight-bold mb-4 mt-4"
                  style={{ fontWeight: "bold" }}
                >
                  Company Info
                </h3>

                <div className="form-group">
                  <label htmlFor="company" className="font-weight-bold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-control"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="company_description"
                    className="font-weight-bold mt-2"
                  >
                    Company Description
                  </label>
                  <textarea
                    id="company_description"
                    name="company_description"
                    className="form-control"
                    rows="4"
                    placeholder="What does your company do?"
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="contact_email"
                    className="font-weight-bold mt-2"
                  >
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    className="form-control"
                    placeholder="Email address for applicants"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="contact_phone"
                    className="font-weight-bold mt-2"
                  >
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="contact_phone"
                    name="contact_phone"
                    className="form-control"
                    placeholder="Optional phone for applicants"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-primary btn-block mt-4 text-white mb-3"
                  type="submit"
                  style={{
                    backgroundColor: "#4F2DFA",
                    width: "100%",
                  }}
                >
                  Edit Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
EditJobPage.propTypes = {
  updateJob: PropTypes.func.isRequired,
};

export default EditJobPage;

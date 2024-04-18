import { Link } from "react-router-dom";
import {FaExclamationTriangle} from "react-icons/fa"

export const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center mt-5">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link to="/">
        <button className="text-white bg-dark btn rounded-md px-3 py-2 mt-4">
          Go Back
        </button>
      </Link>
    </section>
  );
}

export default NotFound
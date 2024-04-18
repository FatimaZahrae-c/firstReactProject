import { Hero } from "../components/Hero";
import { HomeCards } from "../components/homeCards";
import { JobListings } from "../components/jobListings";
import { ViewAllJobs } from "../components/viewAllJobs";


export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
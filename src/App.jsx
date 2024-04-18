import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { MainLayout } from "./layouts/mainLayout";
import { JobsPage } from "./pages/jobsPage";
import { NotFound } from "./pages/NotFound";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/addJobPage";
import EditJobPage from "./pages/editJobPage";



const App = () => {
  const addjob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }
  

  // delete
  const deleteJob =  async (id) => {
     const res = await fetch(`/api/jobs/${id}`, {
       method: "DELETE",
     });
     return;
  }

  const update = async (job) => {
     const res = await fetch(`/api/jobs/${job.id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(job),
     });
     return;

  }


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addjob} />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
      <Route
        path="/edit-job/:id"
        element={<EditJobPage updateJob={update} />}
      />
    </Route>
  )
);
  return <RouterProvider router={router} />;
};

export default App;

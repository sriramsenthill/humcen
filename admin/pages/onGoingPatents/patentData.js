export let jobData = [];

const fetchJobData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/job_order");
    const data = await response.json();

    // Find the specific job object you want to return
    const specificJob = data.find((job) => job._id.job_no === 1013);

    return specificJob;
  } catch (error) {
    console.error("Error fetching job order data:", error);
    return null;
  }
};

// Assign the fetched job data to the jobData array
fetchJobData().then((specificJob) => {
  if (specificJob) {
    jobData = [specificJob];
  }
});
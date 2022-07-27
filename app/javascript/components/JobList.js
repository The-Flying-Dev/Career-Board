import React, { useState, useEffect } from "react";
import axios from 'axios';

const JobList = props => {

  //initial state
  const [jobs, setJobs] = useState([])

  //hook to get the data from rails api controller
  useEffect(() => {
    axios.get('/api/v1/jobs.json')
      .then(response => setJobs(response.data))
  }, []);


  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index}>
          {job.company} | {job.position} | {job.description}
        </div>
      ))}
    </div>
  );
};


export default JobList

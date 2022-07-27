import React, { useState, useEffect } from "react";
import axios from 'axios';
//import * as qs from 'qs'
import NewJobForm from "./NewJobForm";

const JobList = props => {

  //initial state
  const [jobs, setJobs] = useState([])
  
  //hook to get the data from rails api controller
  useEffect(() => {
    axios.get('/api/v1/jobs.json')
      .then(response => setJobs(response.data))
  }, []);

  const initialFormState = {
    company: '',
    position: '',
    description: ''
  };

  const addJob = job => {
    // qs - querystring parser that supports nesting and arrays
    const qs = require('qs');

    axios.post('/api/v1/jobs', qs.stringify(
      {
        job:{
          company: job.company,
          positions: job.position,
          description: job.description
        }
      }
    ))
      .then(response => (console.log(response)))
      .catch( error => console.log(error))

      setJobs([...jobs, job]);
  }


  return (
    <div>
      <div>
        <NewJobForm addJob={addJob} initialFormState={initialFormState} />
      </div>
      {jobs.map((job, index) => (
        <div key={index}>
          {job.company} | {job.position} | {job.description}
        </div>
      ))}
    </div>
  );
};


export default JobList

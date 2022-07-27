import React, { useState, useEffect } from "react";
import axios from "axios";
//import * as qs from 'qs'
import NewJobForm from "./NewJobForm";
import Job from "./Job";

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

  //creating a job
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

  //delete a job
  const removeJob = id => {
    axios.delete('/api/v1/jobs/' + id)
      .then(response => {
        setJobs(jobs.filter(job => job.id !== id))
      })
      .catch(error => console.log(error))
  };


  return (
    <div>
      <div>
        <NewJobForm addJob={addJob} />
      </div>
      <br />
      <hr />
      {jobs.map((job, _) => (
        <Job job={job} removeJob={removeJob} />
      ))}
    </div>
  );
};


export default JobList

import React, { useState, useEffect } from "react";
import axios from "axios";
//import * as qs from 'qs'
import NewJobForm from "./NewJobForm";
import Job from "./Job";
import EditJob from "./EditJob";

const JobList = props => {

  //initial state
  const [jobs, setJobs] = useState([]);
  //editing job
  const [editing, setEditing] = useState(false);
  const [CurrentJob, setCurrentJob] = useState(initialFormState);
  
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

  //editing a job
  const editJob = job => {
    setEditing(true);
    setCurrentJob({
      id: job.id,
      company: job.company,
      positions: job.position,
      description: job.description
    })
  };

  const updateJob = (updatedJob) => {
    setEditing(false);

    const qs = require('qs');
    axios.patch('/api/v1/jobs' + updateJob.id, qs.stringify(
      {
        job:{
          company: updatedJob.company,
          positions: updatedJob.position,
          description: updatedJob.description
        }
      }
    ))
    .then(response => (console.log(response.data)));
    setJobs(jobs.map(job => (job.id === updatedJob.id ? updatedJob : job)))
  };


  return (
    <div>
      <div>
        {editing ? (
          <EditJob
            setEditing={setEditing}
            CurrentJob={CurrentJob}
            updateJob={updateJob}
          />
        ) : (
          <NewJobForm addJob={addJob} initialFormState={initialFormState} />
        )}
      </div>
      <br />
      <hr />
      {jobs.map((job, _) => (
        <Job job={job} removeJob={removeJob} editJob={editJob} editing={editing} />
      ))}
    </div>
  );
};


export default JobList;

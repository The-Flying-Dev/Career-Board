import React from "react";

const Job = ({ job, removeJob }) => {

  return (
    <div key={job.id}>
      <h4>{job.company}</h4>
      <p>{job.position}</p>
      <p>{job.description}</p>
      <button onClick={() => removeJob(job.id)}>Remove</button>
    </div>
  );
}

export default Job;
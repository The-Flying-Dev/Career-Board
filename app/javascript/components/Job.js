import React from "react";

const Job = ({ job, removeJob, editJob, editing }) => {
  //displays edit button if nothing is currently being edited
  return (
    <div key={job.id}>
      <h4>{job.company}</h4>
      <p>{job.position}</p>
      <p>{job.description}</p>

      {editing ? (null
      ) : (
        <button onClick={() => {editJob(job)}}>Edit</button>
      )}
      <button onClick={() => removeJob(job.id)}>Remove</button>
    </div>
  );
}

export default Job;
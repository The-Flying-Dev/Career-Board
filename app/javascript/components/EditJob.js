import React, { useState } from 'react';

const EditJob = props => {

  //set initial state to empty strings from props passed from Joblist
  const [job, setJob] = useState(props.CurrentJob);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value })
  };

  return (
    <form onSubmit={e => {
      //prevents page re-rendering on submit
      e.preventDefault();

      if (!job.company || !job.position || !job.description) return;
      //passes inputted text in the form to updateJob and edits the job
      props.updateJob(job)
      setJob(props.initialFormState)
    }}>
      <label>Company</label>
      <input type='text' name='company' value={job.company} onChange={handleInputChange} />
      <label>Position</label>
      <input type='text' name='position' value={job.position} onChange={handleInputChange} />
      <label>Description</label>
      <input type='text' name='description' value={job.description} onChange={handleInputChange} />
      <button>Update Job</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  )
};

export default EditJob;
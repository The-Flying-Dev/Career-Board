import React, { useState } from 'react';

const NewJobForm = props => {

  //initializes form fields with empty strings
  const [job, setJob] = useState(props.initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value })
  };

  return (
    <form onSubmit={e => {
      //prevents page re-rendering on submit
      e.preventDefault();

      if (!job.company || !job.position || !job.description) return;
      //passes inputted text in the form to addJob and adds it to the jobs array
      props.addJob(job)
      setJob(props.initialFormState)
    }}>
      <label>Company</label>
      <input type='text' name='company' value={job.company} onChange={handleInputChange} />
      <label>Position</label>
      <input type='text' name='position' value={job.position} onChange={handleInputChange} />
      <label>Description</label>
      <input type='text' name='description' value={job.description} onChange={handleInputChange} />
      <button>Create Job</button>
    </form>
  )
}

export default NewJobForm;
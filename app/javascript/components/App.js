import React from "react";
import JobList from "./JobList";


  function App(props) {
    return (
      <div>
        <h1>All Jobs</h1>
        <JobList props={props} />
      </div>
    );
  }

export default App;
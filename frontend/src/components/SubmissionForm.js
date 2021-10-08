import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => axios.post('/api/userarticles', data)
    .catch(err => {
    console.log("Error in Create!");
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("source")} placeholder="Source" /></p> 
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
     
      <p> <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select></p>

      <p> <select {...register("type_of_evidence")}>
      <option value="">Select type of research...</option>
        <option value="Case study">Case study</option>
        <option value="Experiment">Experiment</option>
      </select></p>

      <p> <select {...register("participant_type")}>
      <option value="">Select participant type...</option>
        <option value="Student">Student</option>
        <option value="Practicioner">Practicioner</option>
        <option value="other">other</option>
      </select></p>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;

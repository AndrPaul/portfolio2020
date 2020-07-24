import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toastr from 'toastr';
import axios from "axios";
import ErrorMessage from "./validate";

const Form = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    subject: "",
    description: "",
  });

  const { register, handleSubmit, reset, errors } = useForm();


  toastr.options = {"positionClass": "toast-top-right","progressBar": true,}
  const onSubmit = (values, e) => {
    
    const { email, name, subject, description } = values;
    axios.post("http://localhost:8080/sendme", {
      email,
      name,
      subject,
      text: description,
    });
   
    e.target.reset();
    toastr.success('Message was sent successfully!');
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="inputField">
          <input
            className={`${errors.email && "inputError"}`}
            name="email"
            type="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Your email *"
            value={values.email}
            onChange={handleChange}
          />
          <ErrorMessage error={errors.email} />
        </div>
        <div className="inputField">
          <input
            className={`${errors.name && "inputError"}`}
            name="name"
            type="text"
            placeholder="Your name *"
            ref={register({ required: true })}
            value={values.name}
            onChange={handleChange}
          />
          <ErrorMessage error={errors.name} />
        </div>
        <div className="inputField">
          <input
            className={`${errors.subject && "inputError"}`}
            name="subject"
            type="text"
            placeholder="Subject *"
            ref={register({ required: true })}
            value={values.subject}
            onChange={handleChange}
          />
          <ErrorMessage error={errors.subject} />
        </div>
        <div className="inputField">
          <p className="reqTxt"> * = Required</p>
          <textarea
            className={`${errors.description && "inputError"}`}
            name="description"
            placeholder="Type your message here *"
            ref={register({ required: true, minLength: 15 })}
            value={values.description}
            onChange={handleChange}
            rows="15"
            cols="80"
          ></textarea>
          <ErrorMessage error={errors.description} />
        </div>

        <button className="btn" onClick={reset} type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Form;

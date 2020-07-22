import { useState, useEffect } from "react";
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: '', name: '', subject: '', description: '' })
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    const {email,name,subject,description} = values;
    
    axios.post('http://localhost:8080/sendme', {
            //make an object to be handled from req.body on the backend. 
            email,
            name,
            subject,
            //change the name to represent text on the backend.
            text: description
        })
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback,isSubmitting,errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;

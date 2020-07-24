import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    subject: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const reset = () => {
    setValues(...values)
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    const { email, name, subject, description } = values;
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      axios.post("http://localhost:8080/sendme", {
        email,
        name,
        subject,
        text: description,
      });
      reset();
      return;

    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, isSubmitting, errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    
  };
};

export default useForm;

import React from "react";
import { useForm } from "react-hook-form";
import toastr from "toastr";
import axios from "axios";
import ErrorMessage from "./validate";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  toastr.options = { positionClass: "toast-top-right", progressBar: true };
  const onSubmit = (data, e) => {
    const { email, firstname, lastname, subject, description } = data;
    axios.post("/sendme", {
      email,
      firstname,
      lastname,
      subject,
      text: description,
    });
    toastr.success("Message was sent successfully!");
    e.target.reset();
  };
  return (
    <main style={{marginBottom : '10vh'}}>
      <div className="contactContainer">
        <div className="formImage"></div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2>Contact form</h2>
          <div className="inputField">
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              placeholder="Your e-mail *"
            />
            <ErrorMessage error={errors.email} />
          </div>
          <div className="singleField">
            <div className="inputField">
              <input
                className={`${errors.firstname && "inputError"}`}
                name="firstname"
                type="text"
                placeholder="First name *"
                ref={register({ required: true })}
              />

              <ErrorMessage error={errors.firstname} />
            </div>
            <div className="inputField">
              <input
                className={`${errors.lastname && "inputError"}`}
                name="lastname"
                type="text"
                placeholder="Last name *"
                ref={register({ required: true })}
              />
              <ErrorMessage error={errors.lastname} />
            </div>
          </div>

          <div className="inputField">
            <input
              className={`${errors.subject && "inputError"}`}
              name="subject"
              type="text"
              placeholder="Subject *"
              ref={register({ required: true })}
            />
            <ErrorMessage error={errors.subject} />
          </div>
          <div className="inputField">
            <textarea
              className={`${errors.description && "inputError"}`}
              name="description"
              placeholder="Type your message here *"
              ref={register({ required: true, minLength: 15 })}
              rows="8"
              cols="90"
            ></textarea>
            <ErrorMessage error={errors.description} />
          </div>
          <p className="reqTxt"> * = Required</p>
          <button className="btn" type="submit">
            Send <span className="green">message</span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Form;

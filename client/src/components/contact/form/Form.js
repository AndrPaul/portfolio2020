import React from "react";
import useForm from "./useForm";
import validate from "./validate";


const Form = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate
    );
   

    function submit() {
        alert("Submitted Succesfully");
    }

    return (
        <div>
           
            <form onSubmit={handleSubmit} noValidate>
                <div className="inputField">
                    <input className={`${errors.email && "inputError"}`} name="email" type="email" placeholder="Your email *" value={values.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="inputField">
                    <input className={`${errors.email && "inputError"}`} name="name" type="text" placeholder="Your name *" value={values.name} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.name}</p>}
                </div>
                <div className="inputField">
                    <input className={`${errors.email && "inputError"}`} name="subject" type="text" placeholder="Subject *" value={values.subject} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.subject}</p>}
                </div>
                <div className="inputField">
                    <p className="reqTxt"> * = Required</p>
                    <textarea className={`${errors.email && "inputError"}`} name="description" placeholder="Type your message here *" value={values.description} onChange={handleChange} rows="15" cols="80"></textarea>
                    {errors.email && <p className="error">{errors.description}</p>}
                </div>


                <button className="btn" type="submit">Send message</button>
            </form>
        </div>
    );
};


export default Form;

export default function validate(values) {
    let errors = {};
    
    if (!values.email) {
        
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid, ex: your@email.com";
    }
    if (!values.name) {
        
        errors.name = "Please type in your name.";
    }
    if (!values.subject) {
        errors.subject = "Please don't leave the subject field empty.";
    }
    if (values.description.length < 20) {
        errors.description = "Your message needs to be more than 20 characters.";
    }
    return errors;
}

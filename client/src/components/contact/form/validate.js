import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className="error">Please do not leave this field empty.</p>;
      case "minLength":
        return <p className="error">The message needs to be minmium 15 charcaters.</p>;
      case "pattern":
        return <p className="error">Please enter a valid email address.</p>;
      default:
        return null;
    }
  }

  return null;
}

import React from "react";
import "./Error.css";

export default function Error({ message }) {
  return (
    <div className="box loading-error">
      <span>
        <h2>Error . . . !</h2>
        <h4>
          Message: <font>{message}</font>
        </h4>
      </span>
    </div>
  );
}

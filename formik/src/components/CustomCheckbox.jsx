import { useField } from "formik";
import React from "react";
import {Link} from 'react-router-dom'

export default function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);
  //console.log(meta)
  return (
    <>
      <div className="checkboxDiv">
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <div>
        <span>Accept terms of use</span>
        {meta.error && <div className="error">{meta.error}</div>}
        </div>
      </div>
    </>
  );
}

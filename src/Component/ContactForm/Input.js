import React from "react";
import styles from "./Input.css";

const FormInput = (props) => {
  var inputElement = "";
  const inputClass = [];
  inputClass.push("form-control", "form-group");
  if (props.invalid && props.setrequired) inputClass.push(styles.Invalid);

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClass.join(" ")}
          onChange={props.change}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          className={inputClass.join(" ")}
          onChange={props.change}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={inputClass.join(" ")} onChange={props.change}>
          {props.elementConfig.option.map((data, i) => (
            <option key={i} value={data.value}>
              {data.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          className={inputClass.join(" ")}
          onChange={props.change}
        />
      );
      break;
  }

  return <div className="col">{inputElement}</div>;
};

export default FormInput;

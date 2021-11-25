import React from "react";
import styles from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.box}>
      <input
        className={styles.input}
        type={props.type}
        onChange={props.onChange}
        ref={ref}
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default Input;

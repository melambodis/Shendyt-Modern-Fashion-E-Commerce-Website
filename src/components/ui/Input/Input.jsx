import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({
  disabled,
  id = "",
  value,
  type = "text",
  placeholder,
  onChange,
  label,
  error,
  className,
}) => {
  return (
    <div className={`${styles.inputContainer}`}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.inputError : ""} ${
          disabled ? styles.inputDisabled : ""
        } ${className}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
Input.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input;

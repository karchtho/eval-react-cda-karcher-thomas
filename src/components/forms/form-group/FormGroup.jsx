import classes from './FormGroup.module.css';

function FormGroup({ label, type = "text", id, value, onChange, required = false, placeholder }) {
  return (
    <div className={classes["form-group"]}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default FormGroup;

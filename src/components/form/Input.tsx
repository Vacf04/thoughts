import styles from "./Input.module.css";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};
export default function Input({ label, name, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        {...props}
        className={styles.input}
      />
    </>
  );
}

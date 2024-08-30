type InputProps = React.ComponentProps<"input"> & {
  label: string;
};
export default function Input({ label, name, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...props} />
    </>
  );
}

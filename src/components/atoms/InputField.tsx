interface InputFieldProps {
  placeholder: string;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type = 'text', className = '' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full border rounded-md px-3 py-2 ${className}`}
    />
  );
};

export default InputField;

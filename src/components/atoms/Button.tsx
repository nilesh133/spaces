const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'w-full py-3 rounded-md text-white font-semibold';
  const variantClasses =
    variant === 'primary'
      ? 'bg-pink-600 hover:bg-pink-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
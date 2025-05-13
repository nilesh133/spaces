
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="w-[90%] sm:w-[80%] mx-auto">{children}</div>
);

export default Container;
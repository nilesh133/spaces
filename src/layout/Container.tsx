import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className="w-[90%] sm:w-[80%] mx-auto">{children}</div>
);

export default Container;
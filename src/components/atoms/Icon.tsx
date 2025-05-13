import React, { FC, ReactNode } from 'react';

interface IconProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

const Icon: FC<IconProps> = ({ icon, label, className }) => {
  return (
    <div className={`flex items-center gap-2`}>
      <span className="text-xl">{icon}</span>
      <span className="text-sm text-gray">{label}</span>
    </div>
  );
};

export default Icon;
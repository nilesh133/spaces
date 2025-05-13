// Icon Component
interface IconProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, label, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xl">{icon}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
};

export default Icon;
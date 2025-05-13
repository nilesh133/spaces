import Container from "../../layout/Container";

interface ReviewCardProps {
  avatar: string;
  name: string;
  title: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ avatar, name, title, rating, comment }) => {
  return (
        <div className="flex gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <div>
            <h4 className="text-lg font-semibold">{title}. <span className="text-yellow-500">{"★".repeat(rating)}</span></h4>
            <p className="text-sm font-semibold text-gray-600">{name}</p>
            <p className="text-sm text-gray-500 mt-2">{comment}</p>
        </div>
        </div>
  );
};

export default ReviewCard;
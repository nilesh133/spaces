import Button from "../atoms/Button";
// import { useGetReviewsQuery, useGetRatingsSummaryQuery } from '../features/reviewsApi';
import {
  FaBroom,
  FaCheckCircle,
  FaClock,
  FaComments,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";
import ReviewCard from "../molecules/ReviewCard";
import RatingSummary from "../molecules/RatingSummary";
import { useGetCustomerReviewsQuery } from "../../store/apiSlice";
import Container from "../../layout/Container";

const ReviewsSection = () => {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetCustomerReviewsQuery(null);
  //   const { data: summary } = useGetRatingsSummaryQuery(null);

  if (isLoading) return <p>Loading reviews...</p>;
  if (isError) return <p>Failed to load reviews.</p>;
  if (!reviews || reviews.length === 0) return <p>No reviews available.</p>;

  const ratingDetails = [
    { label: "Cleanliness", value: 4.9, icon: <FaBroom /> },
    { label: "Accuracy", value: 4.9, icon: <FaCheckCircle /> },
    { label: "Check-in", value: 4.9, icon: <FaClock /> },
    { label: "Communication", value: 4.9, icon: <FaComments /> },
    { label: "Location", value: 4.5, icon: <FaMapMarkerAlt /> },
    { label: "Value", value: 4.8, icon: <FaTag /> },
  ];

  return (
    <Container>
      <div className="space-y-6 py-8 border-b">
        <RatingSummary />

        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.slice(0, 6).map((review: any) => (
              <ReviewCard
                key={review.id}
                avatar={review.avatar}
                name={review.name}
                title={review.role}
                rating={5}
                comment={review.comments}
              />
            ))}
          </div>

          <button className="px-7 py-2 bg-purple-800 text-white font-lg rounded-lg">
            Show all {reviews?.length} reviews
          </button>
        </Container>
      </div>
    </Container>
  );
};

export default ReviewsSection;

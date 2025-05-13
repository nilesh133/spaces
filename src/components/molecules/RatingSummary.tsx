import {
  FaStar,
  FaKey,
  FaMapMarkerAlt,
  FaTags,
  FaBroom,
  FaRegCommentDots,
  FaCheckCircle,
} from "react-icons/fa";

const RatingSummary = () => {
  const ratings = {
    overall: 4.87,
    totalReviews: 256,
    categories: [
      {
        label: "Cleanliness",
        value: 4.9,
        icon: <FaBroom className="w-5 h-5" />,
      },
      {
        label: "Accuracy",
        value: 4.9,
        icon: <FaCheckCircle className="w-5 h-5" />,
      },
      { label: "Check-in", value: 4.9, icon: <FaKey className="w-5 h-5" /> },
      {
        label: "Communication",
        value: 4.9,
        icon: <FaRegCommentDots className="w-5 h-5" />,
      },
      {
        label: "Location",
        value: 4.5,
        icon: <FaMapMarkerAlt className="w-5 h-5" />,
      },
      { label: "Value", value: 4.8, icon: <FaTags className="w-5 h-5" /> },
    ],
  };

  return (
    <section className="mx-auto py-10 px-4 border-b font-lato">
      <div className="flex items-center mb-6 gap-2">
        <FaStar className="w-5 h-5 text-black" />
        <span className="text-xl font-semibold">{ratings.overall}</span>
        <span className="text-gray-500">· {ratings.totalReviews} Reviews</span>
      </div>

      <div className="flex flex-wrap flex-col md:flex-row text-center text-sm">
        <div className="border-b md:border-r md:border-b-0 flex-1 min-w-[200px] mb-4 pr-2">
          <p className="font-medium mb-2">Overall rating</p>
          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-xs w-3">{star}</span>
                <div className="w-24 bg-gray-200 h-1 relative flex-1">
                  {star === 5 && (
                    <div className="absolute top-0 left-0 bg-black h-1 w-4/5" />
                  )}
                  {star === 4 && (
                    <div className="absolute top-0 left-0 bg-black h-1 w-3/12" />
                  )}
                  {star === 3 && (
                    <div className="absolute top-0 left-0 bg-black h-1 w-2/12" />
                  )}
                  {star === 2 && (
                    <div className="absolute top-0 left-0 bg-black h-1 w-1/12" />
                  )}
                  {star === 1 && (
                    <div className="absolute top-0 left-0 bg-black h-1 w-1/12" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {ratings.categories.map((category) => (
          <div
            key={category.label}
            className="border-b md:border-r md:border-b-0 flex-1 min-w-[150px] mb-4 last:border-r-0"
          >
            <p className="font-medium mb-2">{category.label}</p>
            <p className="text-lg font-semibold mb-1">{category.value}</p>
            <div className="flex justify-center">{category.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatingSummary;

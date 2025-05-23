import BookingCard from "../components/organisms/BookingCard";
import LocationMap from "../components/organisms/LocationMap";
import ReviewsSection from "../components/organisms/ReviewSection";
import VenueImages from "../components/organisms/VenueImages";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


export const VenuePage = () => (
  <div className="mx-auto">
    <Header/>
    <VenueImages />
    <BookingCard/>
    <ReviewsSection/>
    <LocationMap/>
    <Footer/>
  </div>
);
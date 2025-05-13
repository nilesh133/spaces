import Icon from '../atoms/Icon';
import { CiShare1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Gallery from '../molecules/Gallery';
import Container from '../../layout/Container';

const VenueImages: React.FC = () => (
  <Container>
    <div className="my-6 space-y-6">
      <div className='flex flex-col md:flex-row gap-2 items-start justify-between md:items-center'>
        <h1 className="text-2xl md:text-3xl font-semibold font-oswald">566 launch event spaces near San Francisco, CA, United States</h1>
        <div className='flex items-center gap-4'>
          <Icon icon={<CiShare1 />} label="Share" />
          <Icon icon={<CiHeart/>} label={"Save"}/>
        </div>
      </div>
      <Gallery />
    </div>
  </Container>
);

export default VenueImages;
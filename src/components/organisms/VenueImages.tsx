import { FC } from 'react';
import Icon from '../atoms/Icon';
import { CiShare1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Gallery from '../molecules/Gallery';
import Container from '../../layout/Container';

const VenueImages: FC = () => (
  <Container>
    <div className="my-6 space-y-6">
      <div className='flex items-center justify-between'>
        <h1 className="text-3xl font-semibold font-oswald">566 launch event spaces near San Francisco, CA, United States</h1>
        <div className='flex items-center gap-4'>
          <Icon icon={<CiShare1/>} label={"Share"}/>
          <Icon icon={<CiHeart/>} label={"Save"}/>
        </div>
      </div>
      <Gallery />
    </div>
  </Container>
);

export default VenueImages;
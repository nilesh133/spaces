import { FC } from 'react';
import galleryImages from '../../assets/galleryImages';

const Gallery: FC = () => (
  <div className="grid gap-2">
    {galleryImages.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Venue ${idx + 1}`}
        className={`object-cover w-full ${idx === 0 ? 'row-span-2' : ''}`}
      />
    ))}
    <div className="col-span-3 text-right text-sm text-blue-500 cursor-pointer">All Images</div>
  </div>
);

export default Gallery;
import galleryImages from '../../assets/galleryImages';

const Gallery: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    {galleryImages.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Venue ${idx + 1}`}
        className={`object-cover w-full h-full ${idx === 0 ? 'md:row-span-2' : ''}`}
      />
    ))}
    <div className="col-span-1 sm:col-span-2 md:col-span-3 text-right text-sm text-blue-500 cursor-pointer">
      All Images
    </div>
  </div>
);

export default Gallery;
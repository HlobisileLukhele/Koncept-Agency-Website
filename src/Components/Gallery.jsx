import Nandi from '../assets/Images/Nandi.png';
import Darktaste from '../assets/Images/Darktaste-mockup.jpg';
import Coverphoto from '../assets/Images/CoverPhoto-Mockup.jpg';
import Busankazi from '../assets/Images/Busankazi-mockup.jpg';
import cfeditsmockup from '../assets/Images/cfedit-mockup.jpg';
import Thembisa from '../assets/Images/Thembisa-mockup.jpg';
import Delta from '../assets/Images/Delta-mockup.jpg';
import Duduza from '../assets/Images/Duduza-mockup.jpg';
import Ecru from '../assets/Images/Ecru-mockup.jpg';
import Embeded from '../assets/Images/Embeded-mockup.jpg';

const Gallery = () => {
  return (
    <div className="container-fluid py-5 px-5">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-2">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Delta} alt=" Delta logo design mockup" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Nandi} alt="Nandi Derma spf" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src={Thembisa} alt="Thembisa logo mockup design" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Busankazi} alt="Busankazi logo mockup design" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Darktaste} alt="Duduza logo design mockup" />
          </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={Coverphoto} alt="cfedits logo design mockup design" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={cfeditsmockup} alt="cfedits logo design mockup design" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Ecru} alt="Ecru logo design mockup" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Embeded} alt=" Embeded logo design mockup" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Duduza} alt="Duduza logo design mockup" />
          </div>
        </div>
        </div>
  )
}

export default Gallery

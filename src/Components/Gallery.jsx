import Nandi from '../assets/Images/Nandi.png';
import Gorogangmockup from '../assets/Images/Gorogang-mockup.jpg';
import beadvodka from '../assets/Images/beadvodka-mockup.jpg';
import Coverphoto from '../assets/Images/CoverPhoto-Mockup.jpg';
import cfedits from '../assets/Images/cfedits-Poster1.jpg';
import Busankazi from '../assets/Images/Busankazi-mockup.jpg';
import cfeditsmockup from '../assets/Images/cfedit-mockup.jpg';
import Thembisa from '../assets/Images/Thembisa-mockup.jpg';
import Delta from '../assets/Images/Delta-mockup.jpg';
import Duduza from '../assets/Images/Duduza-mockup.jpg';
import Ecru from '../assets/Images/Ecru-mockup.jpg';
import Embeded from '../assets/Images/Embeded-mockup.jpg';

const Gallery = () => {
  return (
    <div className="container-fluid pt-10 pb-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
            <img className="h-auto max-w-full rounded-lg" src={Duduza} alt="Duduza logo design mockup" />
          </div>
          
          <div className=" card-container pt-10 text-center">
          <div className="max-h-100 h-65 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            "Working with Koncept Agency on my logo design was a fantastic experience. They delivered a clean,proffesional
            logo that perfectly captures my vision, and they  did so on time. I highly recommended them for outstanding service and creativity."
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400 pt-5 pb-5"> Banele Tshabalala</h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-black dark:text-black">MD: Dark Taste</h5>
         </div>  
         </div>
         
      <div>
        <img className="h-auto max-w-full rounded-lg" src={Coverphoto} alt="cfedits logo design mockup design" />
          </div>
          <div className=" card-container pt-10 text-center">
          <div className="max-h-100 h-65 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            "I provided Koncept Agency with a sample of how I would like my loogo to be like. We did a few edits, and they
            delivered on what I wanted and most importantly they delivered on time."
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400 pt-5 pb-5">Desmond Lavisa</h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-black dark:text-black">MD: Lavisa Technologies</h5>
         </div>  
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
        </div>
        </div>

  )
}

export default Gallery

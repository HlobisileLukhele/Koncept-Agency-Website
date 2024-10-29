import Gallery from "../Components/Gallery"
import Testimonial from "../Components/Testimonial"

const Work = () => {
  return (
    <> 
    <div className="flex flex-col items-center justify-center py-6 px-6 text-center">
    <h1 className="title-font font-semibold text-xl py-4">
        HAVE A LOOK AT SOME WORK DONE FOR CLIENTS
    </h1>
    <p className="text-gray-800 pb-7 text-lg">
        You think it, we bring it to life. Our work is a clear visual representation of our clients vision into reality.
    </p>
    <button className="bg-gray-600 hover:bg-gray-500 p-3  rounded-md shadow-md uppercase text-white font-bold">
        Get a free quote
    </button>
</div> 

    <Gallery />
    <Testimonial />
    </>
  )
}

export default Work;

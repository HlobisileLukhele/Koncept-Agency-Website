import Gallery from "../Components/Gallery"
import Testimonial from "../Components/Testimonial"

const Work = () => {
  return (
    <> 
    <div className="flex flex-col items-center justify-center py-6 px-6 text-center">
    <h1 className="title-font font-semibold text-2xl py-4 offer">
        HAVE A LOOK AT SOME WORK DONE FOR CLIENTS
    </h1>
    <p className="text-gray-600  text-lg offer text-xl">
        You think it, we bring it to life. Our work is a clear visual representation of our clients vision into reality.
    </p>
    
</div> 

    <Gallery />
    <Testimonial />
    </>
  )
}

export default Work;

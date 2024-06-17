const Testimonial = () => {

<div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         <div className=" card-container pt-2 text-center">
          <div className="max-h-auto h-65 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            <blockquote>
             Koncept Agency is one of the best design agencies one has ever worked with. The professionalism, response rate, and quality of work produced by the agency are unmatched. Our brands look and feel can compete on an international level.
             </blockquote>
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400 pt-5 pb-5"> Banele Tshabalala</h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-black dark:text-black"> MD: Dark Taste</h5>
         </div>  
         </div>
        <div className=" card-container pt-2 text-center">
          <div className="max-h-auto h-65 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            <blockquote>
            Working with Koncept Agency on my logo design was a fantastic experience. They delivered a clean,proffesional
            logo that perfectly captures my vision, and they  did so on time. I highly recommended them for outstanding service and creativity.
            </blockquote>
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400 pt-5 pb-5">Tshega Mampshika</h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-black dark:text-black"> Chief Technology Officer:AlgoAtWork</h5>
         </div>  
         </div>
        <div className=" card-container pt-2 text-center">
          <div className="max-h-auto h-65 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            <blockquote>
            I provided Koncept Agency with a sample of how I would like my loogo to be like. We did a few edits, and they
            delivered on what I wanted and most importantly they delivered on time.
           </blockquote>
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400 pt-5 pb-5">Desmond Lavisa</h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-black dark:text-black">MD: Lavisa Technologies</h5>
         </div>  
         </div>
        
    </div>
    

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
}
export default Testimonial;

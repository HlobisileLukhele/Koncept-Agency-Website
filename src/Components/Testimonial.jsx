import { useState, useEffect } from 'react';

const testimonials = [
  {
    Testimony1:
    "Koncept Agency is one of the best design agencies one has ever worked with. The professionalism, response rate, and quality of work produced by the agency are unmatched. Our brand's look and feel can compete on an international level",
    company: 'Chief Technology Officer: AlgoAtWork',
    owner: 'Tshega Mampshika'
  },
  {
    Testimony1:
    "Working with Koncept Agency on my logo design was a fantastic experience. They delivered a clean, proffesiona logo that perfectly captures my vision, and they  did so on time. I highly recommended them for outstanding service and creativity.",
    company: 'Dark Taste',
    owner: 'Banele Tshabalala<',
  },
  {
    Testimony1:
    "I provided Koncept Agency with a sample of how I would like my loogo to be like. We did a few edits, and they delivered on what I wanted and most importantly they delivered on time.",
    company: 'Desmond Lavisa',
    owner: 'Lvisa Technologies',
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change interval (in milliseconds) for slide duration

    return () => clearInterval(timerId);
  }, [testimonials.length]);

  const renderSlide = (testimonial, index) => (
    <div
      key={testimonial.content}
      className={`transition duration-700 ease-in-out transform ${
        currentSlide === index ? '-translate-x-0' : 'translate-x-full'
      } w-full md:w-3/4`}
    >
      <figure className="max-w-screen-md mx-auto">
        <svg
          className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p className="text-2xl font-medium text-gray-900 dark:text-white">
            "{testimonial.content}"
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">
              {testimonial.company}
            </div>
            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
              {testimonial.owner}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="flex space-x-4 overflow-x-auto px-4 py-8">
          {testimonials.map((testimonial, index) => renderSlide(testimonial, index))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

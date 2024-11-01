import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div
      className="container-fluid text-center py-10 flex justify-center items-center"
      style={{ backgroundColor: '#4882b1' }}
    >
      <div className="text-center max-w-lg">
        <h2 className="text-3xl font-semibold text-white mb-4 offer">
          Let us bring your ideas to life!
        </h2>
        <p className="text-2xl text-white mb-6 offer ">
          Let’s have a chat about how we can creatively breathe life into your ideas and brands.
        </p>
        <Link to="../Contact">
          <button className="bg-gray-600 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;

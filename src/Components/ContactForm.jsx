
const ContactFom = () => {
  return (
<div className="w-full" id="form">
    <div className="bg-white h-96"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-80">
            <p className="text-3xl font-bold leading-7 text-center mb-8 text-gray-700 ">Get In Touch</p>
            <p className="text-1xl font-bold leading-7  text-center mb-8 text-gray-700"> </p>
            <form action="" method="post">
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none  "> Full Name</label>
                        <input type="text" className="leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none ">Email Address</label>
                        <input type="email" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none ">Subject</label>
                        <input type="text" className="leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none ">Message</label>
                        <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gray-700 rounded hover:bg-gray-600  focus:border-blue-700 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default ContactFom